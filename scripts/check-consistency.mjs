import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * check-consistency.mjs
 * Verifica que los 16 precios coincidan en las tres fuentes del sitio:
 *   1) app.js  → PRICING_DATA (priceCurrent)
 *   2) index.html → JSON-LD (catálogo de ofertas)
 *   3) llms-full.txt → tabla de tarifas
 * Sale con código 1 si hay diferencias (lo usa el CI).
 */

const root = process.cwd();
const read = (f) => readFileSync(resolve(root, f), 'utf8');
const fail = [];
const ok = [];

// 1) app.js
const appJs = read('app.js');
const appPrices = [...appJs.matchAll(/priceCurrent:\s*"([\d.]+)"/g)].map((m) => Number(m[1]));
if (appPrices.length !== 16) fail.push(`app.js: se esperaban 16 precios en PRICING_DATA y se encontraron ${appPrices.length}`);
else ok.push(`app.js: ${appPrices.length} precios`);

// 2) index.html JSON-LD
const html = read('index.html');
let ldPrices = [];
const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
for (const [, body] of ldBlocks) {
  try {
    JSON.parse(body);
  } catch (err) {
    fail.push(`index.html: JSON-LD inválido → ${err.message}`);
    continue;
  }
  for (const m of body.matchAll(/"price":\s*"([\d.]+)"/g)) ldPrices.push(Number(m[1]));
}
ldPrices = ldPrices.filter((p) => p < 100); // descarta precios ajenos al catálogo
ok.push(`index.html: ${ldBlocks.length} bloque(s) JSON-LD válido(s), ${ldPrices.length} precios en ofertas`);

// 3) llms-full.txt
const llmsFull = existsSync(resolve(root, 'llms-full.txt')) ? read('llms-full.txt') : '';
const llmsPrices = [...llmsFull.matchAll(/^\|\s*[^|]+\|\s*[^|]+\|\s*([\d.]+)\s*\|/gm)]
  .map((m) => Number(m[1]))
  .filter((p) => p > 0 && p < 100);
ok.push(`llms-full.txt: ${llmsPrices.length} precios en la tabla`);

const same = (a, b) => a.length === b.length && [...a].sort((x, y) => x - y).join() === [...b].sort((x, y) => x - y).join();
if (appPrices.length && ldPrices.length && !same(appPrices, ldPrices)) {
  fail.push(`DESAJUSTE: app.js (${appPrices.length}) ≠ JSON-LD index.html (${ldPrices.length}). Revisa precios duplicados.`);
}
if (appPrices.length && llmsPrices.length && !same(appPrices, llmsPrices)) {
  fail.push(`DESAJUSTE: app.js (${appPrices.length}) ≠ tabla de llms-full.txt (${llmsPrices.length}).`);
}

// 4) referencias a assets locales
const srcs = [...html.matchAll(/(?:src|href)="(assets\/[^"?#]+)/g)].map((m) => m[1]);
const missing = [...new Set(srcs)].filter((p) => !existsSync(resolve(root, p)));
if (missing.length) fail.push(`Archivos referenciados que no existen: ${missing.join(', ')}`);
else ok.push(`assets: ${new Set(srcs).size} referencias locales verificadas`);

// 5) archivos obligatorios de GEO
for (const f of ['robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt', 'ai.txt', 'assets/og-image.jpg']) {
  if (!existsSync(resolve(root, f))) fail.push(`Falta el archivo obligatorio: ${f}`);
}

// 6) pesos de imagen (solo las que realmente sirve la página)
const referenced = new Set(srcs);
const heavy = [];
for (const f of readdirSync(resolve(root, 'assets'))) {
  const rel = `assets/${f}`;
  if (!referenced.has(rel)) continue;
  const size = (await import('node:fs')).statSync(resolve(root, 'assets', f)).size;
  if (/\.(jpg|jpeg|png)$/i.test(f) && size > 300 * 1024) heavy.push(`${f} (${Math.round(size / 1024)} KB)`);
}
if (heavy.length) fail.push(`Imágenes pesadas servidas en la página: ${heavy.join(', ')}. Usa la versión .webp.`);

console.log('— Comprobaciones —');
ok.forEach((l) => console.log('  ✓', l));
if (fail.length) {
  console.error('\n— Errores —');
  fail.forEach((l) => console.error('  ✗', l));
  process.exit(1);
}
console.log('\nTodo consistente.');
