# AGENTS.md — Guía para agentes de IA y personas que trabajan en este repositorio

> **Este archivo es el punto de entrada.** Si eres un agente de IA (Claude Code, Antigravity/Gemini,
> Cursor, Copilot, Codex…) lee esto completo antes de tocar nada. Si eres una persona nueva en el
> proyecto, también.

---

## 1. Qué es este proyecto

Sitio web **estático de una sola página** de **Clic ID** (ClicId.com.ec), distribuidor autorizado de
**firmas electrónicas certificadas ANF AC** en Ecuador. Vende certificados `.p12` para SRI, Quipux,
Consejo de la Judicatura, SERCOP, SENAE, etc. El objetivo comercial es conversión por **WhatsApp**.

- Producción: **https://clicid.com.ec** (y `www` que redirige 301 al apex)
- Repo: `samanthachimborazokolganov-gif/clic-ID` (dueña: Samantha; colaborador: `jorgeoscar84`)
- Idiomas: todo el contenido en **español de Ecuador**. No traduzcas ni cambies el tono por iniciativa propia.

## 2. Stack y cómo funciona

| Pieza | Detalle |
|---|---|
| Front | HTML + CSS + JavaScript **vanilla**, sin framework ni build local |
| Página principal | `index.html` (todo el sitio en una sola página con anclas) |
| Estilos | `styles.css` (~47 KB, sin preprocesador) |
| Lógica | `app.js` (datos de precios, calculadora, chat, formulario, menú móvil) |
| Legal | `politica-de-privacidad.html` |
| Imágenes | `assets/` — los originales `.jpg/.png` se conservan; en la página se usan las variantes `.webp` |
| Servidor | `Dockerfile` (nginx:1.27-alpine) + `nginx.conf` — gzip, cache de assets, headers de seguridad, `/healthz` |
| Deploy | **Dokploy** (instancia `dokploy.nexuss.top`), app `clicid-site-llgc2q`, build `dockerfile`, rama `main` |
| Auto-deploy | Webhook de GitHub → Dokploy (**pendiente de configurar**: ver §8) |

No hay `npm install` ni compilación en local: abres el HTML y ya. La minificación de CSS/JS ocurre
**solo dentro del build de Docker**.

## 3. Reglas de oro (no negociables)

1. **NO rediseñar.** El diseño (morado `#762ee4` + blanco, tipografías Outfit/Inter, tarjetas con
   emojis, mascota Cliki, chat flotante) fue aprobado por la dueña del negocio. Los cambios visuales
   solo se hacen con pedido explícito. Arreglos de bugs (overflow, accesibilidad) sí están permitidos.
2. **Los precios NO se inventan.** La fuente de verdad es `app.js` → `const PRICING_DATA`.
   Ojo: los mismos 16 precios están replicados en el JSON-LD de `index.html`
   (busca `"@id": "https://clicid.com.ec/#servicio-firma"`). Si cambias uno, cambia el otro:
   `node scripts/check-consistency.mjs` lo verifica y el CI falla si no coinciden.
3. **No inventar datos**: certificaciones, reseñas, plazos, direcciones, números de clientes. Si un
   dato no está en el repo, no se publica.
4. **No tocar** DNS, dominio, certificados TLS, configuración de Dokploy, `CNAME` ni el webhook desde
   un cambio de contenido. Eso lo maneja el responsable de infraestructura.
5. **No subir secretos** ni tokens al repo. No hay `.env`; el sitio no tiene backend.
6. **Nada de `node_modules`, `dist` ni artefactos** al repositorio.

## 4. Mapa del repositorio

```
index.html                     Página principal (head SEO, JSON-LD, secciones, widgets)
politica-de-privacidad.html    Política de privacidad (LOPDP)
styles.css                     Todos los estilos (incluye los fixes responsive al final)
app.js                         Config (WhatsApp), PRICING_DATA, calculadora, chat, formulario
assets/                        Imágenes. WebP = versiones que usa la página. jpg/png = originales
robots.txt                     Rastreo + rastreadores de IA + sitemap
sitemap.xml                    Mapa del sitio (2 URLs)
llms.txt                        Guía corta para modelos de lenguaje (llmstxt.org)
llms-full.txt                   Versión extendida: tarifas, requisitos, proceso, FAQ, datos verificables
ai.txt                          Política de uso por agentes de IA
.well-known/ai.txt              Copia de ai.txt en la ruta estándar
Dockerfile / nginx.conf        Servidor de producción (no modificar sin probar el build)
docs/github-workflow-validate.yml  Plantilla de CI (copiar a .github/workflows/ cuando el token tenga scope workflow)
scripts/check-consistency.mjs  Compara precios app.js vs JSON-LD (lo usa el CI)
docs/PLAN-SEO-IA.md            Plan de trabajo SEO / posicionamiento en IA (fases y estado)
AGENTS.md                      Este archivo
CLAUDE.md                      Puntero para Claude Code → este archivo
```

## 5. Cómo trabajar en local

```bash
# Opción A (Python, ya instalado en la mayoría de equipos)
python -m http.server 8080

# Opción B (Node)
npx --yes serve -l 8080 .
```

Abre `http://localhost:8080`. Recomendaciones:

- Prueba **escritorio (1440‑ancho) y móvil (390‑ancho)**. En móvil verifica que **no haya scroll
  horizontal** y que la hamburguesa abra el menú.
- `index.html` referencia `styles.css?v=3` y `app.js?v=N`: si no ves tus cambios, sube el `?v=` o
  haz “hard reload”.
- Si combinas dos tests con servidores distintos, cuidado con el **cache** del navegador.

### Qué comprobar antes de hacer commit

```bash
node scripts/check-consistency.mjs      # precios app.js == JSON-LD
# revisar a ojo:
#  - la consola del navegador sin errores
#  - ninguna imagen rota (todas deben cargar)
#  - los 6 planes aparecen en la sección de precios
#  - calculadora y WhatsApp siguen funcionando
```

## 6. Dónde tocar cada cosa

| Quiero cambiar… | Archivo / lugar |
|---|---|
| Precios, ofertas, textos de cada plan | `app.js` → `PRICING_DATA` **+** JSON-LD en `index.html` |
| Número de WhatsApp / nombre de marca | `app.js` → `CONFIG` |
| Textos de secciones (hero, requisitos, proceso, FAQ…) | `index.html` (busca el `id` de la sección) |
| Estilos | `styles.css` (al final hay bloques de mantenimiento responsive) |
| Título/descripción para buscadores | `<head>` de `index.html` |
| Datos estructurados (schema.org) | Los bloques `<script type="application/ld+json">` de `index.html` |
| Datos que citan las IA (llms.txt) | `llms.txt` y `llms-full.txt` (mantener sincronizados con precios) |
| Imagen al compartir en redes/WhatsApp | `assets/og-image.jpg` (1200×630) |
| Rastreadores | `robots.txt` |
| Páginas del sitemap | `sitemap.xml` (actualiza `<lastmod>`) |

## 7. Flujo de trabajo y despliegue

```
editar → probar en local → commit en main → push → (webhook) → Dokploy clona y construye → clicid.com.ec
```

- Rama de producción: **`main`**. No hay ramas de staging.
- Si prefieres revisión previa: crea rama `mejora/lo-que-sea`, abre Pull Request y pide revisión.
- **Despliegue automático: ACTIVO.** Cada push a `main` dispara el webhook de GitHub hacia Dokploy y la app se reconstruye y publica sola (tarda ~1–2 minutos). Si el deploy falla, se ve en Dokploy → *Deployments*.
- **Rollback:** en Dokploy → pestaña *Deployments* → elige el deploy anterior → **Rollback**.
  También funciona `git revert <sha>` + push.

### Cómo se construye la imagen

`Dockerfile` (multi-stage): una etapa Node minifica `styles.css` y `app.js` **en el sitio** (mismos
nombres de archivo, no hay que tocar el HTML) y la etapa final usa `nginx:1.27-alpine`. Los `.webp`
de `assets/` se copian tal cual. Si agregas un tipo de archivo nuevo en la raíz, revisa el `COPY` del
Dockerfile (copia por extensión).

## 8. Pendientes conocidos (actualizado: noviembre 2026)

1. ~~Webhook de despliegue~~ — **configurado y funcionando** (probado con un push real).
   Add webhook* → Payload URL `https://dokploy.nexuss.top/api/deploy/<TOKEN>` (el responsable de
   infra lo pasa), Content type `application/json`, evento *Just the push event*.
2. **CI en GitHub Actions**: la plantilla está en `docs/github-workflow-validate.yml`. Copiarla a `.github/workflows/validate.yml` requiere un token con scope `workflow` (o hacerlo desde la web de GitHub). Mientras tanto, ejecutar `node scripts/check-consistency.mjs` antes de cada push.
3. **Google Search Console**: dar de alta `clicid.com.ec` y enviar `sitemap.xml` (lo hace negocio).
4. **Perfiles sociales reales** para `sameAs` y para el Knowledge Panel (no inventar).
5. **Revisión del `aggregateRating`** del JSON-LD original: si las reseñas no son verificables,
   conviene quitarlo (riesgo de acción manual de Google).
6. **Páginas de contenido nuevas** (guía SRI, empresas/RUC, requisitos): ver `docs/PLAN-SEO-IA.md`.
7. **Analítica**: pendiente de decisión (recomendado Plausible o Cloudflare Web Analytics, sin cookies,
   compatible con LOPDP).

## 9. Posicionamiento en IA (GEO/AEO) — resumen operativo

El sitio ya publica: `llms.txt`, `llms-full.txt`, `ai.txt`, `.well-known/ai.txt`, `robots.txt` con
permisos explícitos a GPTBot / OAI-SearchBot / ChatGPT-User / PerplexityBot / ClaudeBot /
Google-Extended / Applebot-Extended / CCBot, JSON-LD con catálogo de 16 ofertas, `HowTo`,
`BreadcrumbList` y `FAQPage`.

**Regla:** ninguna IA puede citar lo que no está escrito. Si agregas un dato comercial (precio,
plazo, requisito), escríbelo también en `llms-full.txt` y en el HTML visible — nunca solo en el
schema. Evita duplicar precios en sitios nuevos: siempre desde `PRICING_DATA` + JSON-LD.

## 10. Contacto del proyecto

- Negocio / contenido: **Samantha** (dueña del repo)
- Infraestructura, despliegue y SEO/IA: **jorgeoscar84** (colaborador con permiso de escritura)
- Datos de contacto publicados en el sitio: WhatsApp +593 98 035 9264 · info@clicid.com.ec
