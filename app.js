/**
 * ClicId.com.ec - Lógica interactiva de alta conversión
 * Distribuidor Autorizado de Firmas Electrónicas ANF AC
 */

// ==========================================================================
// Configuración Global de Contacto
// (Cambia este número por tu número de WhatsApp real de Ecuador sin el '+')
// ==========================================================================
const CONFIG = {
  whatsappNumber: "593980359264", // Número oficial de WhatsApp Clic ID (0980359264)
  brandName: "ClicId.com.ec",
  provider: "ANF Autoridad de Certificación (ANF AC)",
  promoCode: "PORHOY35"
};

// ==========================================================================
// Base de Datos de Planes y Precios (Datos oficiales ANF AC)
// ==========================================================================
const PRICING_DATA = {
  "persona-natural": {
    categoryTitle: "Persona Natural",
    subtitle: "Para facturación electrónica SRI, trámites personales, profesionales y contratos.",
    cards: [
      {
        id: "pn-15d",
        duration: "15 Días",
        badge: "¡Precio Bomba!",
        badgeType: "gold",
        isBomba: true,
        priceOld: "6.90",
        priceCurrent: "4.49",
        icon: "⚡",
        features: [
          "Firma Electrónica en archivo <strong>.p12</strong>",
          "Ideal para trámites puntuales urgentes",
          "Válida para <strong>SRI, Quipux y Gob.ec</strong>",
          "Entrega garantizada en <strong>15 a 30 min</strong>",
          "Soporte de activación incluido"
        ]
      },
      {
        id: "pn-1a",
        duration: "1 Año",
        badge: "Económico",
        badgeType: "primary",
        priceOld: "28.00",
        priceCurrent: "18.20",
        icon: "📄",
        features: [
          "Firma en archivo <strong>.p12</strong> con clave PIN",
          "Válida para <strong>Facturación SRI (RIMPE)</strong>",
          "Aceptada en <strong>Quipux, Judicatura, IESS</strong>",
          "Emisión rápida 100% en línea",
          "Asistencia técnica de instalación remota"
        ]
      },
      {
        id: "pn-2a",
        duration: "2 Años",
        badge: "⭐ Más Vendido",
        badgeType: "primary",
        isFeatured: true,
        priceOld: "34.16",
        priceCurrent: "22.20",
        icon: "🚀",
        features: [
          "<strong>¡Ahorras más del 35%!</strong> Mejor relación precio",
          "Firma digital <strong>.p12</strong> ilimitada por 2 años",
          "Válida para todo tipo de trámite legal",
          "Soporte prioritario por WhatsApp",
          "Copia de seguridad en nube ANF AC"
        ]
      },
      {
        id: "pn-3a",
        duration: "3 Años",
        badge: "Ahorro Plus",
        badgeType: "primary",
        priceOld: "51.20",
        priceCurrent: "33.28",
        icon: "💼",
        features: [
          "Vigencia extendida de 36 meses",
          "Olvídate de renovar cada año",
          "Válida para <strong>SRI, SENAE y SERCOP</strong>",
          "Entrega inmediata en tu correo",
          "Asistencia en FirmaEC y Adobe Acrobat"
        ]
      },
      {
        id: "pn-4a",
        duration: "4 Años",
        badge: "Gran Valor",
        badgeType: "primary",
        priceOld: "68.25",
        priceCurrent: "44.36",
        icon: "🛡️",
        features: [
          "Vigencia por 48 meses continuos",
          "Máxima estabilidad para profesionales",
          "Compatibilidad Windows, Mac, Linux, Móvil",
          "Clave PUK para recuperación de PIN",
          "Soporte técnico VIP"
        ]
      },
      {
        id: "pn-5a",
        duration: "5 Años",
        badge: "🔥 Máximo Ahorro",
        badgeType: "red",
        priceOld: "85.25",
        priceCurrent: "55.41",
        icon: "👑",
        features: [
          "<strong>El costo por año más bajo del Ecuador</strong>",
          "Firma .p12 con vigencia por 5 años completos",
          "Acreditada por ANF AC y ARCOTEL",
          "Soporte técnico y reinstalación gratuita",
          "Ideal para médicos, ingenieros, abogados y contadores"
        ]
      }
    ]
  },
  "persona-natural-ruc": {
    categoryTitle: "Persona Natural con RUC",
    subtitle: "Para profesionales independientes, comerciantes y contribuyentes con RUC en el SRI.",
    cards: [
      {
        id: "pnr-1a",
        duration: "1 Año",
        badge: "Inicial",
        badgeType: "primary",
        priceOld: "28.00",
        priceCurrent: "18.20",
        icon: "📝",
        features: [
          "Firma en archivo <strong>.p12</strong> con RUC integrado",
          "Emisión para facturación electrónica SRI",
          "Válida para contratos y declaraciones",
          "Aceptada en <strong>Supercias, IESS, Quipux</strong>",
          "Entrega en 15 a 30 minutos"
        ]
      },
      {
        id: "pnr-2a",
        duration: "2 Años",
        badge: "⭐ Recomendado",
        badgeType: "primary",
        isFeatured: true,
        priceOld: "34.16",
        priceCurrent: "22.20",
        icon: "🌟",
        features: [
          "<strong>La favorita para emprendedores y negocios</strong>",
          "2 años completos sin preocuparte por vencimiento",
          "Válida para <strong>SERCOP (Compras Públicas)</strong>",
          "Aceptada en bancos y notarías digitales",
          "Soporte técnico para configuración en tu sistema contable"
        ]
      },
      {
        id: "pnr-3a",
        duration: "3 Años",
        badge: "Ahorro Pro",
        badgeType: "primary",
        priceOld: "51.20",
        priceCurrent: "33.28",
        icon: "📈",
        features: [
          "Vigencia por 3 años (36 meses)",
          "Menos de $11.10 por año",
          "Válida para <strong>SENAE / Ecuapass</strong>",
          "Seguridad criptográfica de 2048 bits",
          "Soporte multidevice garantizado"
        ]
      },
      {
        id: "pnr-4a",
        duration: "4 Años",
        badge: "Largo Plazo",
        badgeType: "primary",
        priceOld: "68.25",
        priceCurrent: "44.36",
        icon: "🏆",
        features: [
          "4 años de facturación y trámites ininterrumpidos",
          "Emisión oficial ANF AC Ecuador",
          "Asesoría telefónica y por WhatsApp",
          "Respaldo seguro en el portal ANF",
          "Instalación remota guiada"
        ]
      },
      {
        id: "pnr-5a",
        duration: "5 Años",
        badge: "🔥 Mejor Inversión",
        badgeType: "red",
        priceOld: "85.25",
        priceCurrent: "55.41",
        icon: "💎",
        features: [
          "<strong>Solo $11.08 por año</strong> de firma electrónica",
          "5 años de tranquilidad jurídica y tributaria",
          "Reconocimiento legal idéntico a firma manuscrita",
          "Soporte y reenvío de certificado ante extravío",
          "Asistencia para importar en software contables"
        ]
      }
    ]
  },
  "persona-juridica": {
    categoryTitle: "Persona Jurídica (Empresas)",
    subtitle: "Para Representantes Legales de Compañías Anónimas, SAS, Cía. Ltda. y entidades corporativas.",
    cards: [
      {
        id: "pj-1a",
        duration: "1 Año",
        badge: "Corporativo 1A",
        badgeType: "primary",
        priceOld: "33.60",
        priceCurrent: "21.84",
        icon: "🏢",
        features: [
          "Firma para <strong>Representante Legal</strong>",
          "Facturación electrónica de la empresa",
          "Válida ante <strong>Supercias, SRI y SERCOP</strong>",
          "Trámites notariales y bancarios de la sociedad",
          "Entrega digital express"
        ]
      },
      {
        id: "pj-2a",
        duration: "2 Años",
        badge: "⭐ Más Recomendado",
        badgeType: "primary",
        isFeatured: true,
        priceOld: "39.76",
        priceCurrent: "25.84",
        icon: "🏛️",
        features: [
          "<strong>La opción ideal para compañías y SAS</strong>",
          "2 años de validez jurídica corporativa",
          "Alineada al periodo de nombramiento",
          "Válida para contratos públicos y licitaciones",
          "Soporte corporativo prioritario"
        ]
      },
      {
        id: "pj-3a",
        duration: "3 Años",
        badge: "Empresarial 3A",
        badgeType: "primary",
        priceOld: "58.80",
        priceCurrent: "38.22",
        icon: "📊",
        features: [
          "Vigencia por 36 meses para tu empresa",
          "Ahorro de costos administrativos en trámites",
          "Válida para aduanas SENAE y comercio exterior",
          "Certificado digital emitido por ANF AC",
          "Acompañamiento en la activación de claves"
        ]
      },
      {
        id: "pj-4a",
        duration: "4 Años",
        badge: "Plan 4 Años",
        badgeType: "primary",
        priceOld: "78.35",
        priceCurrent: "50.93",
        icon: "🌐",
        features: [
          "4 años de cobertura corporativa",
          "Seguridad de clave privada PIN/PUK",
          "Integración en ERP y sistemas de facturación masiva",
          "Descarga directa desde la plataforma ANF",
          "Atención dedicada"
        ]
      },
      {
        id: "pj-5a",
        duration: "5 Años",
        badge: "🔥 Máximo Ahorro Corp",
        badgeType: "red",
        priceOld: "97.10",
        priceCurrent: "63.12",
        icon: "🎯",
        features: [
          "<strong>El mejor precio para empresas en Ecuador</strong>",
          "5 años completos de firma empresarial",
          "Certificación ANF Autoridad de Certificación",
          "Validez jurídica plena Ley de Comercio Electrónico",
          "Asistencia ilimitada durante la vigencia"
        ]
      }
    ]
  }
};

// ==========================================================================
// Funciones de WhatsApp URL Builder
// ==========================================================================
function getWhatsAppUrl(customMessage) {
  const encoded = encodeURIComponent(customMessage.trim());
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
}

function buildPlanOrderMessage(category, duration) {
  const tipo = category.replace(" (Empresas)", "");
  return `Hola, me interesa la firma de ${tipo} con vigencia de ${duration}`;
}

// ==========================================================================
// Renderizador de Tarjetas de Precios
// ==========================================================================
function renderPricingCards(categoryKey) {
  const container = document.getElementById("pricingGrid");
  const data = PRICING_DATA[categoryKey];
  if (!container || !data) return;

  container.innerHTML = "";

  data.cards.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = `pricing-card ${card.isFeatured ? "featured" : ""} ${card.isBomba ? "bomba" : ""}`;

    // Mensaje para WhatsApp
    const waMessage = buildPlanOrderMessage(data.categoryTitle, card.duration, card.priceCurrent);
    const waUrl = getWhatsAppUrl(waMessage);

    const badgeHtml = card.badge ? `
      <div class="card-badge ${card.badgeType || ''}">${card.badge}</div>
    ` : "";

    const featuresHtml = card.features.map(f => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <span>${f}</span>
      </li>
    `).join("");

    cardEl.innerHTML = `
      ${badgeHtml}
      <div class="card-top">
        <div class="card-icon">${card.icon}</div>
        <h3 class="card-duration">Firma Electrónica ${card.duration}</h3>
        <p class="card-target">${data.categoryTitle}</p>
      </div>

      <div class="card-pricing-block">
        <div class="price-regular-row">
          <span>PVP Normal:</span>
          <span class="price-old">$${card.priceOld}</span>
        </div>
        <div class="price-main-row">
          <span class="price-currency">$</span>
          <span class="price-amount">${card.priceCurrent}</span>
        </div>
        <div class="price-iva">✓ Precio Incluye IVA</div>
      </div>

      <ul class="card-features">
        ${featuresHtml}
      </ul>

      <div class="card-actions">
        <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp" id="btn-wa-${card.id}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Tramitar por WhatsApp</span>
        </a>
        <button class="btn btn-outline btn-sm open-order-modal-btn" data-category="${data.categoryTitle}" data-duration="${card.duration}" data-price="${card.priceCurrent}">
          Solicitud Express en Línea
        </button>
      </div>
    `;

    container.appendChild(cardEl);
  });

  // Actualizar listeners para botones de modal
  attachModalButtons();
}

// ==========================================================================
// Tabs Interactivas de Precios
// ==========================================================================
function setupPricingTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-category");
      renderPricingCards(category);
    });
  });
}

// ==========================================================================
// Temporizador de Cuenta Regresiva de Urgencia
// ==========================================================================
function setupCountdown() {
  const timerEl = document.getElementById("urgencyTimer");
  if (!timerEl) return;

  // 3 horas, 42 minutos de cuenta regresiva
  let totalSeconds = 3 * 3600 + 42 * 60 + 15;

  function update() {
    if (totalSeconds <= 0) {
      totalSeconds = 4 * 3600; // Reiniciar para mantener la urgencia activa
    }
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const pad = n => n.toString().padStart(2, "0");
    timerEl.textContent = `${pad(h)}h : ${pad(m)}m : ${pad(s)}s`;
    totalSeconds--;
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// Calculadora Dinámica de Ahorro
// ==========================================================================
function setupSavingsCalculator() {
  const slider = document.getElementById("yearsSlider");
  const yearsVal = document.getElementById("sliderYearsVal");
  const savingsNum = document.getElementById("calcSavingsNum");
  const detailsEl = document.getElementById("calcDetails");

  if (!slider || !yearsVal || !savingsNum || !detailsEl) return;

  // Precios anuales de renovación habitual ($28/año) vs planes de Clic ID
  const annualCostSingle = 28.00;
  const bundlePrices = {
    1: 18.20,
    2: 22.20,
    3: 33.28,
    4: 44.36,
    5: 55.41
  };

  function recalculate() {
    const years = parseInt(slider.value, 10);
    const labelYears = `${years} ${years === 1 ? "Año" : "Años"}`;
    yearsVal.textContent = labelYears;

    const costIfRenewedEveryYear = annualCostSingle * years;
    const bundlePrice = bundlePrices[years];
    const totalSaved = (costIfRenewedEveryYear - bundlePrice).toFixed(2);

    savingsNum.textContent = `$${totalSaved}`;
    detailsEl.textContent = `Pagas solo $${bundlePrice.toFixed(2)} en vez de $${costIfRenewedEveryYear.toFixed(2)} renovando cada año.`;

    const calcWaBtn = document.getElementById("calcWaBtn");
    if (calcWaBtn) {
      calcWaBtn.href = getWhatsAppUrl(`Hola, me interesa la firma de ${labelYears}`);
    }
  }

  slider.addEventListener("input", recalculate);
  recalculate();
}

// ==========================================================================
// FAQ Accordion
// ==========================================================================
function setupFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Cerrar otros
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          const otherAnswer = other.querySelector(".faq-answer");
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Alternar actual
      if (isOpen) {
        item.classList.remove("active");
        answer.style.maxHeight = null;
      } else {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ==========================================================================
// Widget Flotante de WhatsApp y Mockup Chat
// ==========================================================================
function setupWhatsAppWidget() {
  const triggerBtn = document.getElementById("waTriggerBtn");
  const mascotPill = document.getElementById("waMascotPill");
  const chatPopup = document.getElementById("waChatPopup");
  const closeBtn = document.getElementById("waCloseBtn");
  const inputEl = document.getElementById("waChatInput");
  const sendBtn = document.getElementById("waSendBtn");
  const quickOptionBtns = document.querySelectorAll(".wa-option-btn");

  if (!triggerBtn || !chatPopup) return;

  function togglePopup() {
    chatPopup.classList.toggle("open");
    // Ocultar badge de no leído al abrir
    const badge = triggerBtn.querySelector(".wa-unread-badge");
    if (badge) badge.style.display = "none";
  }

  triggerBtn.addEventListener("click", togglePopup);
  if (mascotPill) mascotPill.addEventListener("click", togglePopup);
  if (closeBtn) closeBtn.addEventListener("click", () => chatPopup.classList.remove("open"));

  // Enviar mensaje personalizado al presionar enter o botón
  function sendCustomMessage() {
    const text = inputEl ? inputEl.value.trim() : "";
    const msg = text || "Hola, me interesa información sobre la firma electrónica";
    window.open(getWhatsAppUrl(msg), "_blank");
    if (inputEl) inputEl.value = "";
    chatPopup.classList.remove("open");
  }

  if (sendBtn) sendBtn.addEventListener("click", sendCustomMessage);
  if (inputEl) {
    inputEl.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendCustomMessage();
    });
  }

  // Opciones rápidas
  quickOptionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const topic = btn.getAttribute("data-topic") || "firma electrónica";
      const msg = `Hola, me interesa ${topic}`;
      window.open(getWhatsAppUrl(msg), "_blank");
      chatPopup.classList.remove("open");
    });
  });

  // Mostrar el popup automáticamente tras 12 segundos para captar clientes indecisos
  setTimeout(() => {
    if (!chatPopup.classList.contains("open")) {
      chatPopup.classList.add("open");
    }
  }, 12000);
}

// ==========================================================================
// Modal de Solicitud Express
// ==========================================================================
function setupModal() {
  const overlay = document.getElementById("orderModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");
  const form = document.getElementById("expressOrderForm");

  if (!overlay || !form) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => overlay.classList.remove("open"));
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("open");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("orderName").value.trim();
    const idNum = document.getElementById("orderId").value.trim();
    const phone = document.getElementById("orderPhone").value.trim();
    const plan = document.getElementById("orderSelectedPlan").value;
    const notes = document.getElementById("orderNotes").value.trim();

    const summaryText = `*NUEVA SOLICITUD DE FIRMA - CLIC ID* 🚀
- *Nombre:* ${name}
- *Cédula/RUC:* ${idNum}
- *Teléfono:* ${phone}
- *Plan Seleccionado:* ${plan}
${notes ? `- *Notas:* ${notes}` : ""}

Por favor confírmenme los requisitos y forma de pago.`;

    window.open(getWhatsAppUrl(summaryText), "_blank");
    overlay.classList.remove("open");
    form.reset();
  });
}

function attachModalButtons() {
  const buttons = document.querySelectorAll(".open-order-modal-btn");
  const overlay = document.getElementById("orderModalOverlay");
  const summaryEl = document.getElementById("modalPlanSummary");
  const hiddenPlanInput = document.getElementById("orderSelectedPlan");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category") || "Persona Natural";
      const duration = btn.getAttribute("data-duration") || "2 Años";
      const price = btn.getAttribute("data-price") || "22.20";

      if (summaryEl) {
        summaryEl.innerHTML = `
          <div>
            <div class="summary-title">${category} - ${duration}</div>
            <small style="color: #64748b;">Distribuidor Autorizado ANF AC</small>
          </div>
          <div class="summary-price">$${price}</div>
        `;
      }

      if (hiddenPlanInput) {
        hiddenPlanInput.value = `${category} (${duration}) - $${price}`;
      }

      if (overlay) overlay.classList.add("open");
    });
  });
}

// ==========================================================================
// Mobile Navigation & Sticky Header Scroll
// ==========================================================================
function setupNavigation() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  const header = document.querySelector(".header");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Cerrar al hacer clic en un enlace
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
}

// ==========================================================================
// Inicialización Principal al Cargar el DOM
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Renderizar primera categoría por defecto
  renderPricingCards("persona-natural");

  // Configurar componentes
  setupPricingTabs();
  setupCountdown();
  setupSavingsCalculator();
  setupFAQ();
  setupWhatsAppWidget();
  setupModal();
  setupNavigation();

  console.log("ClicId.com.ec - Sistema de Alta Conversión Cargado con Éxito");
});
