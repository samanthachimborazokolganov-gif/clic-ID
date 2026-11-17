# Auditoría de mercado — firma electrónica en Ecuador (noviembre 2026)

Documento de trabajo. Base para el contenido SEO/GEO y para futuras campañas. **Los precios de
terceros son referenciales** tomados de guías públicas del mercado y deben verificarse antes de
publicarse en cualquier pieza nueva.

Fuentes consultadas:
- FacturaSimple — *Firma Electrónica en Ecuador: Security Data, ANF o Token* (mar 2026):
  <https://facturasimple.com/ec/blog/ec-firma-electronica-certificado-digital-sri>
- Quipuy — *Firma electrónica Ecuador: cuánto cuesta y dónde sacarla en 2026* (oct 2025/2026):
  <https://quipuy.com/blog/firma-electronica-ecuador-cuanto-cuesta>
- Guías del SRI sobre facturación electrónica y firma de PDF.

---

## 1. Qué busca la gente (intención real de búsqueda)

Ordenado por intención comercial (de mayor a menor):

| # | Intención / pregunta | Quién pregunta | Página que la cubre |
|---|---|---|---|
| 1 | «acabo de sacar el RUC, ¿qué firma necesito para facturar?» | contribuyente nuevo (RIMPE, profesional independiente, SAS recién constituida) | `firma-electronica-primer-ruc.html` |
| 2 | «cuánto cuesta la firma electrónica en Ecuador / dónde la saco» | comprador comparando precio | `comparativa-firmas-electronicas-ecuador.html` + precios de la home |
| 3 | «mi firma venció / no puedo facturar» | negocio en operación | `renovar-firma-electronica.html` |
| 4 | «perdí mi firma / olvidé la clave» | usuario con un problema urgente | `renovar-firma-electronica.html` |
| 5 | «firma electrónica para el SRI» | quien ya sabe que necesita facturar | home (#precios) + guía 1 |
| 6 | «firma electrónica para persona jurídica / representante legal» | empresas y contadores | guía 1 (bloque jurídica) |
| 7 | «firmar un PDF con varias firmas / invitar a firmar» | despachos, socios, contratos | `pdf-ecuador-firmar-documentos.html` |
| 8 | «ANF vs Security Data vs Banco Central» | comprador informado | comparativa |
| 9 | «firma electrónica para Judicatura / Quipux / SERCOP» | trámites legales y compras públicas | home (#entidades) + guías |
| 10 | «firma electrónica gratis» | usuario que busca precio cero (mito) | comparativa (sección de alertas) |

### Dolores y objeciones que aparecen en las búsquedas

1. **No sé cuál me toca** (natural, con RUC o jurídica) → falta de un mapa claro caso → plan.
2. **Precio confuso**: el mercado va de $25 a $90 y no se entiende por qué.
3. **Bloqueo de facturación por vencimiento**: es el problema más caro para el negocio.
4. **Miedo a perder el archivo o la clave** (¿tengo que comprar otra?).
5. **Miedo a estafas**: «firma gratis», revendedores con sobreprecio, pedir el PIN.
6. **Desconfianza en compartir datos** (cédula, selfie) por canales informales.
7. **Dudas de compatibilidad** (Mac, Linux, FirmaEC, Adobe, facturador).
8. **Contadores**: gestionan varias firmas de clientes y necesitan rapidez y soporte.

---

## 2. Competencia (Ecuador)

| Entidad | Tipo | Modalidad | Precio referencial | Fortaleza percibida | Debilidad aprovechable |
|---|---|---|---|---|---|
| **Banco Central del Ecuador** | pública | presencial | $25 – $40 | precio y respaldo estatal | cita presencial, 3-5 días, sin plataforma |
| **Security Data** | privada | online + presencial | $35 – $80 | marca conocida, red de agencias | sin recuperación garantizada, trámite de 1-3 días |
| **ANF AC** (vía Clic ID) | privada | **100 % online** | **$18.20 – $63.12** | 15–30 min, recuperación, revocación, PDF Ecuador incluido | marca menos masiva en Ecuador |
| **Uanataca** | privada (origen español) | nube o token | $30 – $60 | respaldo internacional | trámite más lento, poca plataforma local |
| **Eclipsoft** | privada | online + presencial | $35 – $85 | integración con facturación | orientado a software, no a persona natural |
| **Lazzate** | privada | online | $40 – $90 | planes multiusuario | precio alto, marca emergente |

**Oferta de Clic ID / ANF AC frente a esa tabla:** precio por año más bajo del mercado publicado
($11.08/año en el plan de 5 años), emisión en 15–30 minutos, y tres beneficios que casi nadie comunica:
**recuperación del certificado**, **revocación por el titular** y **PDF Ecuador gratis**.

---

## 3. Diferenciadores de ANF AC (para usar en contenido)

Verificados/dichos por la empresa; **marcar cuáles tienen respaldo documental antes de subirlos a
schema o a una campaña**:

| Diferenciador | Estado | Cómo se está usando |
|---|---|---|
| Emisión online en 15–30 minutos | ✅ comprobable con el servicio | todas las páginas + JSON-LD `totalTime` |
| **Recuperación del certificado si se pierde** | ✅ diferenciador clave | guía de renovación + home |
| **Revocación del certificado por el titular** | ✅ diferenciador clave (seguridad) | guía de renovación + PDF Ecuador |
| **PDF Ecuador gratis** (firma múltiple, firma en vivo, cifrado, nube) | ✅ producto propio verificable | página dedicada |
| Casa matriz en Barcelona; presencia en Europa y Asia; representación LatAm en Ecuador | ⚠️ usar como «trayectoria internacional», sin cifras | comparativa (sección ANF) |
| ANF AC acompañó la introducción de la firma electrónica en Ecuador / mesas con el Gobierno | ⚠️ redactar en pasado y sin superlativos hasta tener fuente pública | comparativa (sección ANF) |
| «Certificación ISO 17001» | ❌ **verificar**: no existe ISO 17001 como norma de certificación. Probablemente sea ISO/IEC 17021 (organismos de certificación) o ISO/IEC 27001 (seguridad). No se publicó el número | nota interna; se publica «certificado de procesos vigente» |
| Sede física en Ecuador | ❌ no publicada | no se usa |

---

## 4. Estrategia de contenido aplicada

Se eligieron 4 páginas que atacan intenciones distintas sin canibalizarse:

1. **`firma-electronica-primer-ruc.html`** — público nuevo (RUC recién abierto), natural con RUC y
   jurídica. Tabla caso → plan, costos por vigencia, requisitos, 5 errores típicos, ventajas ANF.
2. **`comparativa-firmas-electronicas-ecuador.html`** — capta comparaciones («ANF vs Security Data»,
   «cuánto cuesta»), concentra las 6 entidades y explica los criterios reales. Es la página con más
   probabilidad de ser citada por IA.
3. **`renovar-firma-electronica.html`** — dolor de urgencia (vencida/perdida). Aquí se explotan los
   diferenciadores de recuperación y revocación.
4. **`pdf-ecuador-firmar-documentos.html`** — producto incluido, diferencial frente a cualquier
   competidor y consulta emergente («firmar PDF varias firmas»).

Cada una incluye: respuesta directa en las primeras líneas (para que una IA pueda citar sin
interpretar), tablas citables, FAQ con `FAQPage`, `BreadcrumbList`, `WebPage`, enlaces cruzados,
Open Graph 1200×630 y CTA a WhatsApp.

---

## 5. Siguientes oportunidades (contenido futuro)

- **«Firma electrónica para contadores»**: quien gestiona firmas de varios clientes (alto valor, poca
  competencia específica).
- **«Firma electrónica para trámites judiciales / Judicatura»** y **«para compras públicas SERCOP»**:
  intenciones con menos oferta de contenido.
- **«Firma electrónica vencida: qué hacer paso a paso»** ya cubierta; ampliar con capturas de FirmaEC.
- **Glosario de trámites** (Quipux, SATJE, SOCE, Ecuapass) enlazado desde las guías.
- **Comparativas por caso de uso** (RIMPE vs régimen general; primera empresa vs empresa con 20
  empleados).
- **Migración desde otros proveedores**: «cambiar de Security Data a ANF», explicando que se puede
  tener dos firmas y cómo migrar sin interrumpir la facturación.

## 6. Cómo medir el resultado

- Search Console: impresiones y clics de las 4 URLs nuevas (consultas «primer ruc», «cuánto cuesta»,
  «renovar», «pdf ecuador»).
- Bing Webmaster: mismas consultas (mercado de IndexNow ya notificado).
- Auditoría mensual de IA: preguntar en ChatGPT, Perplexity, Gemini y Google AI Overviews por las 10
  intenciones de la §1 y anotar si citan `clicid.com.ec`.
