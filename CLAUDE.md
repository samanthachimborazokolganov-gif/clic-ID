# CLAUDE.md

Este repositorio usa **`AGENTS.md`** como guía única para agentes de IA.

👉 **Lee [`AGENTS.md`](./AGENTS.md) antes de hacer cualquier cambio.**

Resumen ultra corto por si solo necesitas lo esencial:

- Sitio **estático** (HTML + CSS + JS vanilla). Sin build local, sin npm en producción.
- Producción: **https://clicid.com.ec** · deploy desde la rama **`main`** vía **Dokploy** (build `dockerfile`).
- **No rediseñar.** Diseño aprobado por la dueña del negocio.
- Los precios viven en `app.js` (`PRICING_DATA`) **y** en el JSON-LD de `index.html`; deben coincidir
  (`node scripts/check-consistency.mjs`).
- No inventar datos (certificaciones, reseñas, plazos). Español de Ecuador.
- Probar en local a **1440 px** y **390 px** antes de subir.
- Pendientes y plan: `docs/PLAN-SEO-IA.md` y §8 de `AGENTS.md`.
