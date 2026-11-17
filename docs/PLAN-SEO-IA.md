# Plan SEO + posicionamiento en IA (GEO/AEO) — Clic ID

Última actualización: **17 de noviembre de 2026** · Responsable de ejecución: infraestructura/SEO
· Dueña del negocio: Samantha.

Estado global: **Fases 0, 1, 2 y 3 ejecutadas.** Quedan pendientes externos (cuentas y permisos) en la
fase 5.

---

## Qué se midió / por qué importa

El sitio tenía: un solo idioma y buen contenido comercial, pero **sin archivos para modelos de
lenguaje**, sin datos estructurados de catálogo, imágenes de 673 KB servidas a 440 px, CSS/JS sin
minificar y sin cache. En móvil el header desbordaba el ancho.

Resultado de esta tanda (antes → después):

| Métrica | Antes | Ahora |
|---|---|---|
| Peso de imágenes que descarga la home | ~1.423 KB (jpg/png) | **~91 KB** (WebP, incluidos hero y logos) |
| Hero (LCP) | 673 KB (`hero-signature.jpg`) | **68 KB** (`hero-signature-880.webp`) |
| CSS | 47,2 KB | **32,7 KB** (minificado en build) |
| JS | 24,5 KB | **15,4 KB** (minificado en build) |
| Compresión de texto | sin gzip | **gzip** en html/css/js |
| Cache de assets | ninguna | `max-age=31536000, immutable` |
| Header de seguridad | ninguno | HSTS, nosniff, Referrer-Policy, X-Frame-Options |
| Scroll horizontal móvil | sí (hasta 549 px de ancho) | **no** (verificado a 320/390/1440 px) |
| Archivos para IA | 0 | `llms.txt`, `llms-full.txt`, `ai.txt`, `.well-known/ai.txt`, robots con rastreadores IA |
| Datos estructurados | Product/FAQ parcial | + `Service` con **16 ofertas**, `HowTo`, `BreadcrumbList` |

---

## Fase 0 — Infraestructura y bugs ✅

- `Dockerfile` + `nginx.conf` (gzip, cache, headers, `/healthz`), `.dockerignore`.
- Fix del header en móvil (el CTA del navbar desbordaba) y calculadora a 1 columna en ≤360 px.
- **Commits:** `00e6a6c` (PR #1), `262146c` (fix v2).

## Fase 1 — Rendimiento y automatización ✅ (parcial)

- [x] Minificación de CSS/JS **en el build** de Docker (esbuild), sin cambiar nombres de archivo.
- [x] Imágenes a WebP con tamaño 2x, `width/height`, `loading="lazy"` y `fetchpriority="high"` en el hero.
- [x] Preload del hero (mejora LCP).
- [x] CI de validación (`.github/workflows/validate.yml`): precios consistentes, JSON-LD válido,
      assets existentes, archivos GEO presentes, sanidad del HTML.
- [x] Script `scripts/check-consistency.mjs` (precios app.js ↔ JSON-LD ↔ llms-full).
- [ ] **Webhook de despliegue automático** → requiere permiso admin del repo (ver §5).
- [ ] Fuentes: recortar pesos no usados de Outfit/Inter (requiere revisar qué pesos usa el CSS).
- [ ] Medición formal con PageSpeed Insights / CrUX antes/después (registrar capturas).

## Fase 2 — SEO on-page ✅

- [x] `og:image` 1200×630 real (`assets/og-image.jpg`), `og:image:width/height/type/alt`, Twitter card.
- [x] `preload` del LCP, `alt` descriptivos, dimensiones en todas las imágenes.
- [x] Datos estructurados nuevos: `Service` + `OfferCatalog` (16 ofertas con IVA), `HowTo`, `BreadcrumbList`.
- [x] `sitemap.xml` y `robots.txt` actualizados (con `lastmod` y rastreadores de IA).
- [x] Canonical/hreflang ya correctos (`https://clicid.com.ec/`).
- [ ] **Google Search Console** y **Bing Webmaster Tools**: alta del dominio y envío del sitemap (lo hace negocio).
- [ ] Revisar el `aggregateRating` heredado del JSON-LD original (si las reseñas no son verificables,
      conviene retirarlo: riesgo de acción manual de Google).

## Fase 3 — Posicionamiento en IA (GEO/AEO) ✅

- [x] `llms.txt` (resumen + enlaces), `llms-full.txt` (tarifas, requisitos, proceso, FAQ, glosario,
      fuentes), `ai.txt` + `.well-known/ai.txt`.
- [x] `robots.txt` con permisos explícitos a GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot/User,
      ClaudeBot/SearchBot/User, Google-Extended, Applebot-Extended, Amazonbot, DuckAssistBot, CCBot.
- [x] JSON-LD citable con catálogo de precios y proceso (lo que más se cita en respuestas de IA).
- [x] `<link rel="describedby">` apuntando a `llms.txt` desde el `<head>`.
- [ ] **IndexNow**: enviar las URLs a Bing/Yandex tras cada publicación (clave ya en el repo).
- [ ] Perfiles sociales reales para `sameAs` (Instagram / Facebook / Google Business) — datos del negocio.

## Fase 4 — Contenido de autoridad (siguiente)

Objetivo: dominar consultas conversacionales y ganar citas de IA. Páginas **nuevas** con el mismo
diseño y `styles.css` (sin tocar la home):

1. `firma-electronica-sri.html` — cómo facturar electrónicamente en el SRI con firma `.p12`.
2. `firma-electronica-empresas.html` — personas jurídicas, representante legal, SERCOP/SENAE.
3. `guia-requisitos-firma-electronica.html` — requisitos paso a paso + errores comunes.
4. Opcional: `precios-firma-electronica.html` — tarifario completo citable.

Cada página: H1 propio, respuesta directa en las primeras 2 líneas, tabla comparativa, FAQ,
JSON-LD (`Service` + `FAQPage` + `BreadcrumbList`), enlace interno a la home y desde la home.

## Fase 5 — Medición y mantenimiento

- [ ] Alta de **Google Search Console** + **Bing Webmaster** y envío de sitemap (negocio).
- [ ] Analítica sin cookies (Plausible o Cloudflare Web Analytics) — decisión pendiente.
- [ ] Auditoría mensual de menciones en IA: preguntar en ChatGPT, Perplexity, Gemini/Copilot y
      Google AI Overviews por: «firma electrónica Ecuador», «dónde comprar firma electrónica ANF AC»,
      «cuánto cuesta la firma electrónica para el SRI», «firma electrónica Quipux». Registrar si
      citan `clicid.com.ec` y con qué texto.
- [ ] Revisar Core Web Vitals en Search Console cada mes (LCP, INP, CLS).

---

## Pendientes externos (necesitan permisos o cuentas)

| # | Pendiente | Quién | Detalle |
|---|---|---|---|
| 1 | Webhook GitHub → Dokploy | admin del repo | Settings → Webhooks → `https://dokploy.nexuss.top/api/deploy/<TOKEN>` · `application/json` · push |
| 2 | Google Search Console | negocio | verificar dominio + enviar `sitemap.xml` |
| 3 | Bing Webmaster Tools | negocio | verificar dominio (o importar de GSC) |
| 4 | Perfiles sociales (`sameAs`) | negocio | URLs reales de Instagram/Facebook/Google Business |
| 5 | Analítica | negocio | elegir herramienta sin cookies |
| 6 | Revisión `aggregateRating` | negocio | confirmar si las 348 reseñas son reales |

## Reglas al tocar el sitio

- No cambiar el diseño sin pedido explícito del negocio.
- Cualquier cambio de precio: `app.js` (`PRICING_DATA`) **y** JSON-LD de `index.html`
  **y** tabla de `llms-full.txt`. El CI falla si no coinciden.
- Probar en local a 1440 px y 390 px antes de subir.
- Ver `AGENTS.md` para el flujo completo.
