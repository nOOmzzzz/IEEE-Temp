// ============================================================
// IEEE UPC Interactive Application Logic (Light Edition)
// ============================================================

// Embedded Data Store
const DEFAULT_CHAPTERS = [
  {
    "id": "aess",
    "name": "Aerospace and Electronic Systems Society",
    "acronym": "AESS UPC",
    "badge": "Aeroespacial & Aviónica",
    "color": "#005691",
    "accent": "#00B5E2",
    "description": "Dedicada a la innovación e investigación en tecnologías aeroespaciales, radares, sistemas de aviónica, telemetría y exploración satelital.",
    "shortDescription": "Sistemas espaciales, satélites CanSat, aviónica, radioenlaces y telemetría avanzada.",
    "whatWeDo": "Diseñamos y construimos prototipos satelitales (CanSat y CubeSats), programamos sistemas embebidos para captura de datos en vuelo (sensores IMU, altitud, GPS), implementamos estaciones terrenas móviles de radiofrecuencia (LoRa/UHF) y organizamos lanzamientos de prueba en campo.",
    "links": {
      "linktree": "https://linktr.ee/ieee_aess_upc",
      "instagram": "https://instagram.com/ieee_aess_upc"
    },
    "projects": [
      "Proyecto CanSat UPC (Construcción y lanzamiento de nanosatélite)",
      "Proyecto Satelital Killakuk (Modelado de CubeSat de monitoreo)",
      "Talleres de Telemetría, LoRa y Sensores Aeroespaciales"
    ],
    "officers": [
      {
        "name": "Gerardo Vilcamiza",
        "role": "Presidente",
        "career": "Ingeniería Mecatrónica"
      },
      {
        "name": "Junior Bocanegra",
        "role": "Vicepresidente",
        "career": "Ingeniería Electrónica"
      },
      {
        "name": "Ray Damian",
        "role": "Secretario",
        "career": "Ingeniería Mecatrónica"
      },
      {
        "name": "Elvis de la Torre",
        "role": "Tesorero",
        "career": "Ingeniería Electrónica"
      },
      {
        "name": "Harold Huallanca",
        "role": "Community Manager",
        "career": "Ingeniería Mecatrónica"
      }
    ],
    "icon": "rocket"
  },
  {
    "id": "comsoc",
    "name": "Communications Society",
    "acronym": "ComSoc UPC",
    "badge": "Telecomunicaciones & Redes",
    "color": "#00833e",
    "accent": "#69BE28",
    "description": "Impulsa el conocimiento en ingeniería de comunicaciones, redes móviles 5G/6G, Internet de las Cosas (IoT), ciberseguridad y procesamiento de señales.",
    "shortDescription": "Redes 5G/6G, IoT, ciberseguridad, radioenlaces, fibra óptica y cloud networking.",
    "whatWeDo": "Desarrollamos laboratorios de ciberseguridad y ethical hacking, simulamos arquitecturas de redes 5G/6G y fibra óptica con software profesional, configuramos enrutamiento avanzado y desarrollamos plataformas de Internet de las Cosas (IoT) con servidores en la nube.",
    "links": {
      "linktree": "https://linktr.ee/comsoc.upc",
      "instagram": "https://instagram.com/comsoc.upc"
    },
    "projects": [
      "ComSoc Tech Talks Internacionales con expertos globales",
      "Laboratorios prácticos de Ciberseguridad y Configuración de Redes",
      "Seminarios de IoT, Smart Cities y Comunicaciones Ópticas"
    ],
    "officers": [
      {
        "name": "Danixa Ropon",
        "role": "Presidenta",
        "career": "Ingeniería de Telecomunicaciones"
      },
      {
        "name": "Gabriela Vega",
        "role": "Vicepresidenta",
        "career": "Ingeniería de Telecomunicaciones"
      },
      {
        "name": "Gerardo Mejía",
        "role": "Logística",
        "career": "Ingeniería de Redes"
      },
      {
        "name": "Sandra Quispe",
        "role": "Tesorera",
        "career": "Ingeniería de Redes"
      },
      {
        "name": "Yennifer Rodriguez",
        "role": "Secretaria",
        "career": "Ingeniería Electrónica"
      },
      {
        "name": "Dan Falero",
        "role": "Relaciones Públicas",
        "career": "Ingeniería de Telecomunicaciones"
      }
    ],
    "icon": "radio"
  },
  {
    "id": "ias",
    "name": "Industry Applications Society",
    "acronym": "IAS UPC",
    "badge": "Industria & Potencia",
    "color": "#0072CE",
    "accent": "#41B6E6",
    "description": "Enfocada en la aplicación práctica de la tecnología eléctrica, electrónica e industrial para optimizar procesos en la manufactura, minería sostenible y transición energética.",
    "shortDescription": "Sistemas de potencia, energías renovables, control con PLCs y minería 4.0.",
    "whatWeDo": "Programamos Controladores Lógicos Programables (PLCs) y pantallas HMI para procesos automatizados, realizamos análisis de calidad de energía y paneles solares, realizamos visitas técnicas guiadas a subestaciones y plantas industriales, y conectamos a estudiantes con líderes del sector productivo.",
    "links": {
      "linktree": "https://linktr.ee/IAS_UPC",
      "instagram": "https://instagram.com/ias_upc"
    },
    "projects": [
      "Visitas Técnicas a Plantas Industriales y Subestaciones Eléctricas",
      "Ciclo de Conferencias en Minería 4.0 y Eficiencia Energética",
      "Bootcamp de Programación de Controladores Lógicos (PLC) y SCADA"
    ],
    "officers": [
      {
        "name": "Carlos Sotacora",
        "role": "Presidente",
        "career": "Ingeniería Mecatrónica"
      },
      {
        "name": "Diego Broncano",
        "role": "Vicepresidente",
        "career": "Ingeniería Electrónica"
      },
      {
        "name": "Jhovany Evaristo",
        "role": "Tesorero",
        "career": "Ingeniería Industrial"
      },
      {
        "name": "Julian Toro",
        "role": "Secretario",
        "career": "Ingeniería Mecatrónica"
      }
    ],
    "icon": "zap"
  },
  {
    "id": "ras",
    "name": "Robotics and Automation Society",
    "acronym": "RAS UPC",
    "badge": "Robótica & Control",
    "color": "#C8102E",
    "accent": "#FF6B6B",
    "description": "Fomenta la investigación teórica y aplicada en robótica móvil, visión por computadora, mecatrónica, control inteligente y algoritmos de navegación autónoma.",
    "shortDescription": "Robots móviles, cinemática, ROS 2, visión artificial, SLAM e inteligencia artificial.",
    "whatWeDo": "Construimos robots de competencia (Sumobots, minisumo y seguidores de línea), programamos robots autónomos utilizando ROS 2 y LIDAR para navegación en interiores, aplicamos visión computacional para detección de objetos y fabricamos piezas estructurales mediante impresión 3D y corte láser.",
    "links": {
      "linktree": "https://linktr.ee/IEEERASUPC",
      "instagram": "https://instagram.com/ieeerasupc"
    },
    "projects": [
      "Torneo Anual de Robótica Móvil y Sumobots UPC",
      "Desarrollo de Plataformas Robóticas Autónomas con ROS 2 y SLAM",
      "Talleres de Prototipado Rápido con Impresión 3D y Corte Láser"
    ],
    "officers": [
      {
        "name": "Patricio Vega",
        "role": "Presidente",
        "career": "Ingeniería Mecatrónica"
      },
      {
        "name": "Nikolas Pajuelo",
        "role": "Vicepresidente",
        "career": "Ingeniería Mecatrónica"
      },
      {
        "name": "Litzy Castañeda",
        "role": "Secretaria",
        "career": "Ingeniería Mecatrónica"
      },
      {
        "name": "Luis Quispe",
        "role": "Tesorero",
        "career": "Ingeniería Electrónica"
      },
      {
        "name": "Héctor Salazar",
        "role": "Coord. de Marketing",
        "career": "Ingeniería de Sistemas"
      }
    ],
    "icon": "bot"
  },
  {
    "id": "wie",
    "name": "Women in Engineering",
    "acronym": "WIE UPC",
    "badge": "Diversidad & STEM",
    "color": "#702082",
    "accent": "#BA55D3",
    "description": "Red global dedicada a inspirar, comprometer y empoderar a mujeres para que sigan y lideren carreras académicas y profesionales en ingeniería y ciencias de la computación.",
    "shortDescription": "Empoderamiento, liderazgo femenino, programa de mentorías y vocaciones STEM.",
    "whatWeDo": "Ejecutamos el programa 'Inspira IEEE' dictando talleres de robótica y programación a niñas y colegiales, organizamos simposios y mesas redondas con ingenieras líderes en cargos ejecutivos, brindamos capacitaciones en oratoria y negociación, y fomentamos redes de mentoría interuniversitaria.",
    "links": {
      "linktree": "https://linktr.ee/wieupc",
      "instagram": "https://instagram.com/wieupc"
    },
    "projects": [
      "Programa de Mentorías y Talleres Escolares 'Inspira IEEE'",
      "Simposio del Día Internacional de la Mujer en la Ingeniería",
      "Talleres de Soft Skills, Pitching y Liderazgo Técnico"
    ],
    "officers": [
      {
        "name": "Naldi Peraltilla",
        "role": "Presidenta",
        "career": "Ingeniería de Software"
      },
      {
        "name": "Johana Campos",
        "role": "Vicepresidenta",
        "career": "Ingeniería Industrial"
      },
      {
        "name": "Alexia Yuijan",
        "role": "Secretaria",
        "career": "Ingeniería Biomédica"
      },
      {
        "name": "Johana Ponce",
        "role": "Tesorera",
        "career": "Ingeniería Mecatrónica"
      }
    ],
    "icon": "sparkles"
  },
  {
    "id": "embs",
    "name": "Engineering in Medicine and Biology Society",
    "acronym": "EMBS UPC",
    "badge": "Biomédica & Salud",
    "color": "#009688",
    "accent": "#4DB6AC",
    "description": "Sociedad enfocada en la convergencia de la ingeniería con la medicina y biología, promoviendo tecnologías de diagnóstico, bioinstrumentación, prótesis y salud digital.",
    "shortDescription": "Dispositivos biomédicos, procesamiento de bioseñales, prótesis mioeléctricas y salud digital.",
    "whatWeDo": "Adquirimos y filtramos bioseñales (EMG muscular, EEG cerebral, ECG cardíaco) para controlar mecanismos robóticos y prótesis impresas en 3D, investigamos algoritmos de IA aplicados a la detección temprana en imágenes médicas y realizamos seminarios con médicos e investigadores del sector salud.",
    "links": {
      "linktree": "https://linktr.ee/ieee_embs_upc",
      "instagram": "https://instagram.com/ieee_embs_upc"
    },
    "projects": [
      "Conferencias en Biomecánica y Robótica Asistiva",
      "Taller de Procesamiento de Bioseñales (EEG / EMG) con Python",
      "Mesas Redondas con Especialistas Internacionales en Salud Digital"
    ],
    "officers": [
      {
        "name": "Comité Directivo EMBS",
        "role": "Gestión Estudiantil",
        "career": "Ingeniería Biomédica / Electrónica"
      }
    ],
    "icon": "heart-pulse"
  }
];
const DEFAULT_FAQ = [
  {
    "question": "¿Qué es la Rama Estudiantil IEEE UPC?",
    "answer": "La Rama Estudiantil IEEE UPC es una organización académica y técnica oficial respaldada por el IEEE (Institute of Electrical and Electronics Engineers) y la Universidad Peruana de Ciencias Aplicadas. Reúne a estudiantes y docentes apasionados por el avance de la tecnología para beneficio de la humanidad, ofreciendo proyectos de investigación, networking internacional, talleres especializados y conferencias.",
    "category": "General"
  },
  {
    "question": "¿Cómo puedo unirme como miembro oficial de IEEE?",
    "answer": "Para afiliarte, ingresa al portal oficial de IEEE (ieee.org/join), crea tu cuenta institucional o personal, selecciona la membresía 'Student Member' y asigna tu afiliación a la Universidad Peruana de Ciencias Aplicadas (UPC). Como estudiante en Perú, accedes a tarifas preferenciales con hasta 50% de descuento bajo el programa de economías en desarrollo (Future50).",
    "category": "Membresía"
  },
  {
    "question": "¿Cómo me inscribo a un capítulo técnico específico (AESS, ComSoc, IAS, RAS, WIE, EMBS)?",
    "answer": "Una vez que eres miembro IEEE Student, puedes añadir sociedades técnicas desde tu perfil de IEEE por una cuota anual mínima (muchas de ellas gratuitas o con tarifa especial para estudiantes). Además, puedes unirte a las actividades locales de los capítulos en la UPC completando los formularios de convocatoria en sus respectivos Linktree o postulando a las convocatorias semestrales de voluntariado.",
    "category": "Capítulos"
  },
  {
    "question": "¿Cuáles son los principales beneficios de ser miembro IEEE?",
    "answer": "Entre los beneficios más destacados se encuentran: 1) Acceso a la biblioteca digital IEEE Xplore con miles de papers y normas técnicas; 2) Correo electrónico profesional con alias @ieee.org y suite Google Workspace; 3) Descuentos significativos en congresos y conferencias internacionales; 4) Acceso a la red global de networking IEEE Collabratec; 5) Postulación a becas de investigación, premios y viajes internacionales; 6) Desarrollo de liderazgo mediante cargos directivos.",
    "category": "Membresía"
  },
  {
    "question": "¿Dónde puedo consultar el Estatuto Oficial de la Rama IEEE UPC?",
    "answer": "El Estatuto 2025 de la Rama Estudiantil IEEE UPC define los derechos, deberes, estructura orgánica, procedimientos electorales y régimen disciplinario de todos los miembros. Está disponible públicamente para consulta en la carpeta de documentación oficial de la Rama y en nuestra plataforma digital.",
    "category": "Institucional"
  },
  {
    "question": "¿Puedo proponer un nuevo taller, proyecto o ponencia técnica?",
    "answer": "¡Por supuesto! Fomentamos activamente las propuestas de la comunidad universitaria. Puedes enviarnos tu propuesta a través de nuestro formulario de contacto web, o escribiendo directamente a nuestras redes oficiales (@ieee.upc) con el temario, ponente sugerido y fecha estimada.",
    "category": "Eventos"
  }
];

const FEATURED_PROJECTS = [
  {
    id: "cansat",
    title: "Proyecto CanSat UPC",
    society: "AESS UPC",
    category: "Ingeniería Aeroespacial",
    tag: "Competencia activa",
    date: "2025 - 2026",
    description: "Diseño, fabricación y validación en vuelo de un nanosatélite del tamaño de una lata con telemetría en tiempo real LoRa, estación terrena y paracaídas semiesférico.",
    stats: { stat1: "1,000m", label1: "Altitud de Lanzamiento", stat2: "915 MHz", label2: "Enlace Telemetría" },
    image: "assets/img/cansat-upc.jpg"
  },
  {
    id: "killakuk",
    title: "CubeSat Killakuk",
    society: "AESS UPC",
    category: "Investigación Espacial",
    tag: "I+D satelital",
    date: "En Desarrollo",
    description: "Diseño conceptual y simulación térmica-orbital de un nanosatélite 1U/2U para el monitoreo multiespectral de recursos hídricos y cultivos agrícolas en los Andes peruanos.",
    stats: { stat1: "1U / 2U", label1: "Factor de Forma", stat2: "550 km", label2: "Órbita LEO" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "icai",
    title: "Conferencia Internacional ICAI",
    society: "Rama IEEE UPC",
    category: "Ciencia e Inteligencia Artificial",
    tag: "IEEE Xplore & Scopus",
    date: "Octubre 2025",
    description: "Congreso internacional co-organizado por IEEE UPC con expositores de más de 15 países sobre IA generativa, bioinformática, visión por computadora y ciberseguridad.",
    stats: { stat1: "+120", label1: "Papers Indexados", stat2: "15+", label2: "Países Participantes" },
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "hackathon",
    title: "Hackatón Intercon UPC",
    society: "Rama IEEE & ComSoc",
    category: "Ciudades Inteligentes",
    tag: "Hackatón 48h",
    date: "Noviembre 2025",
    description: "Maratón tecnológica interuniversitaria donde equipos de mecatrónica, software y diseño resuelven problemáticas reales de transporte sostenible e IoT en Lima.",
    stats: { stat1: "48 Horas", label1: "Desafío Continuo", stat2: "S/. 5,000+", label2: "Premios en Efectivo" },
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "mlops",
    title: "Bootcamp MLOps & Arquitectura Cloud",
    society: "RAS & ComSoc UPC",
    category: "Capacitación Práctica",
    tag: "Certificación IEEE",
    date: "Enero 2026",
    description: "4 sesiones intensivas sobre entrenamiento distribuido de redes neuronales, contenedores Docker, CI/CD con GitHub Actions y despliegue en la nube.",
    stats: { stat1: "100%", label1: "Gratuito para Miembros", stat2: "4 Módulos", label2: "Laboratorios Hands-on" },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80"
  }
];

var currentProjectIndex = 0;

// Application Initializer
function initIEEEApp() {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  var store = window.IEEE_DATA || (typeof IEEE_DATA !== 'undefined' ? IEEE_DATA : null) || {
    chapters: DEFAULT_CHAPTERS,
    faq: DEFAULT_FAQ
  };

  var chapters = (store && store.chapters && store.chapters.length > 0) ? store.chapters : DEFAULT_CHAPTERS;
  var faq = (store && store.faq && store.faq.length > 0) ? store.faq : DEFAULT_FAQ;

  renderChapters(chapters);
  renderFAQ(faq);
  setupFeaturedProjects();
  setupChapterTabs(chapters);
  setupFaqSearch(faq);
  setupContactForm();
  setupMobileMenu();
}

document.addEventListener('DOMContentLoaded', initIEEEApp);

// ------------------------------------------------------------
// 1. Featured Projects Carousel
// ------------------------------------------------------------
function setupFeaturedProjects() {
  renderActiveProject(currentProjectIndex);

  var prevBtn = document.getElementById('project-prev-btn');
  var nextBtn = document.getElementById('project-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      currentProjectIndex = (currentProjectIndex - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length;
      renderActiveProject(currentProjectIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      currentProjectIndex = (currentProjectIndex + 1) % FEATURED_PROJECTS.length;
      renderActiveProject(currentProjectIndex);
    });
  }
}

function renderActiveProject(index) {
  var p = FEATURED_PROJECTS[index];
  var container = document.getElementById('active-project-card');
  if (!container || !p) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-6 space-y-6">
        <div class="flex items-center flex-wrap gap-2 text-xs sm:text-sm">
          <span class="pw-label-red">${p.tag}</span>
          <span class="text-slate-300 font-light">·</span>
          <span class="font-bold text-slate-700">${p.society}</span>
          <span class="text-slate-300 font-light">·</span>
          <span class="text-slate-500 font-medium">${p.date}</span>
        </div>

        <h3 class="text-2xl sm:text-4xl font-black font-display text-slate-900 leading-tight">${p.title}</h3>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">${p.description}</p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <p class="text-2xl sm:text-3xl font-black font-display text-slate-900">${p.stats.stat1}</p>
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">${p.stats.label1}</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <p class="text-2xl sm:text-3xl font-black font-display text-upc-red">${p.stats.stat2}</p>
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">${p.stats.label2}</p>
          </div>
        </div>

        <div class="flex items-center space-x-4 pt-2">
          <a href="#contacto" class="btn-upc-primary text-xs">
            <span>Inscribirme en este proyecto</span>
            <i data-lucide="arrow-up-right" class="w-4 h-4 ml-1.5"></i>
          </a>
          <span class="text-xs text-slate-400">Proyecto ${index + 1} de ${FEATURED_PROJECTS.length}</span>
        </div>
      </div>

      <div class="lg:col-span-6">
        <div class="rounded-2xl overflow-hidden border border-slate-200 relative aspect-video sm:aspect-square shadow-lg group">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span class="text-xs font-bold px-3 py-1 rounded-lg bg-white/95 text-slate-900 shadow-md">
              ${p.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

// ------------------------------------------------------------
// 2. Chapters Rendering
// ------------------------------------------------------------
function renderChapters(data, filter) {
  var container = document.getElementById('pw-chapters-grid');
  if (!container) return;

  var currentFilter = filter || 'all';
  var filtered = currentFilter === 'all' ? data : data.filter(function(c) { return c.id === currentFilter; });

  container.innerHTML = filtered.map(function(c) {
    var projectsList = c.projects.slice(0, 2).map(function(p) {
      return `
        <div class="flex items-start text-xs text-slate-700">
          <span class="w-1.5 h-1.5 rounded-full bg-upc-red mr-2 mt-1.5 flex-shrink-0"></span>
          <span class="font-medium">${p}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="pw-card-light p-6 sm:p-7 flex flex-col justify-between" data-chapter="${c.id}">
        <div>
          <!-- Badge & Header -->
          <div class="flex items-center justify-between mb-4">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm text-white shadow-sm" style="background-color: ${c.color}">
              ${c.acronym.split(' ')[0]}
            </div>
            <span class="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider" style="background: ${c.color}15; color: ${c.color}; border: 1px solid ${c.color}30;">
              ${c.badge}
            </span>
          </div>

          <h3 class="text-xl font-bold text-slate-900 mb-1 font-display">${c.name}</h3>
          <p class="text-xs font-bold text-upc-red mb-3">${c.acronym}</p>
          <p class="text-slate-600 text-xs leading-relaxed mb-4">${c.shortDescription}</p>

          <!-- ¿Qué se hace en esta rama? -->
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-4">
            <div class="flex items-center space-x-1.5 text-slate-900 font-bold text-xs mb-1.5 font-display">
              <i data-lucide="wrench" class="w-3.5 h-3.5 text-upc-red"></i>
              <span>¿Qué se hace en ${c.acronym.split(' ')[0]}?</span>
            </div>
            <p class="text-slate-700 text-xs leading-relaxed font-normal">${c.whatWeDo}</p>
          </div>

          <!-- Iniciativas Clave -->
          <div class="space-y-2 mb-6 pt-3 border-t border-slate-100">
            <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Proyectos & Talleres:</h4>
            ${projectsList}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <a href="${c.links.linktree}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-slate-600 hover:text-upc-red flex items-center transition-colors">
            <span>Portal & Redes</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5 ml-1"></i>
          </a>
          <button onclick="openChapterModal('${c.id}')" class="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-red-50 hover:text-upc-red transition-all border border-slate-200">
            Ver Ficha Completa
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function setupChapterTabs(data) {
  var tabs = document.querySelectorAll('.chapter-tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) {
        t.classList.remove('bg-upc-red', 'text-white', 'shadow-sm');
        t.classList.add('bg-slate-100', 'text-slate-700');
      });
      tab.classList.remove('bg-slate-100', 'text-slate-700');
      tab.classList.add('bg-upc-red', 'text-white', 'shadow-sm');

      var filter = tab.getAttribute('data-filter');
      renderChapters(data, filter);
    });
  });
}

// ------------------------------------------------------------
// 3. FAQ Accordion
// ------------------------------------------------------------
function renderFAQ(data) {
  var container = document.getElementById('pw-faq-container');
  if (!container) return;

  container.innerHTML = data.map(function(item, idx) {
    return `
      <div class="pw-card-light border border-slate-200 overflow-hidden mb-3">
        <button onclick="toggleFaq(${idx})" class="w-full p-5 text-left flex items-center justify-between focus:outline-none hover:bg-slate-50/70 transition-colors">
          <span class="text-sm sm:text-base font-bold text-slate-900 pr-4 font-display">${item.question}</span>
          <div id="faq-icon-${idx}" class="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0 transition-transform duration-200">
            <i data-lucide="plus" class="w-4 h-4"></i>
          </div>
        </button>
        <div id="faq-answer-${idx}" class="hidden px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
          ${item.answer}
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

window.toggleFaq = function(idx) {
  var answer = document.getElementById('faq-answer-' + idx);
  var icon = document.getElementById('faq-icon-' + idx);
  if (!answer || !icon) return;

  var isHidden = answer.classList.contains('hidden');
  answer.classList.toggle('hidden');
  icon.innerHTML = isHidden ? '<i data-lucide="minus" class="w-4 h-4 text-upc-red"></i>' : '<i data-lucide="plus" class="w-4 h-4"></i>';
  if (window.lucide) window.lucide.createIcons();
};

function setupFaqSearch(faq) {
  var input = document.getElementById('pw-faq-search');
  if (!input) return;

  input.addEventListener('input', function(e) {
    var term = e.target.value.toLowerCase().trim();
    if (!term) {
      renderFAQ(faq);
      return;
    }
    var filtered = faq.filter(function(item) { 
      return item.question.toLowerCase().indexOf(term) !== -1 || 
             item.answer.toLowerCase().indexOf(term) !== -1 ||
             item.category.toLowerCase().indexOf(term) !== -1;
    });
    renderFAQ(filtered);
  });
}

// ------------------------------------------------------------
// 4. Contact Form Simulation
// ------------------------------------------------------------
function setupContactForm() {
  var form = document.getElementById('pw-contact-form');
  var feedback = document.getElementById('pw-form-feedback');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('pw-name').value;
    var email = document.getElementById('pw-email').value;
    var topic = document.getElementById('pw-topic').value;

    if (feedback) {
      feedback.classList.remove('hidden');
      feedback.innerHTML = `
        <div class="p-4 rounded-xl bg-red-50 border border-red-200 text-slate-900 text-xs sm:text-sm flex items-start space-x-3 shadow-sm">
          <i data-lucide="check-circle" class="w-5 h-5 text-upc-red flex-shrink-0 mt-0.5"></i>
          <div>
            <p class="font-bold text-slate-900">¡Solicitud recibida con éxito, ${name}!</p>
            <p class="mt-1 text-slate-600">Nos comunicaremos a <strong>${email}</strong> sobre el tema: <em>${topic}</em> a la brevedad.</p>
          </div>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      form.reset();
    }
  });
}

// ------------------------------------------------------------
// 5. Chapter Modal (Light)
// ------------------------------------------------------------
window.openChapterModal = function(id) {
  var store = window.IEEE_DATA || { chapters: DEFAULT_CHAPTERS };
  var chapters = store.chapters || DEFAULT_CHAPTERS;
  var c = chapters.find(function(item) { return item.id === id; });
  if (!c) return;

  var modal = document.getElementById('chapter-modal');
  var modalContent = document.getElementById('modal-content');
  if (!modal || !modalContent) return;

  var projectsHtml = c.projects.map(function(p) {
    return `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start">
        <i data-lucide="award" class="w-4 h-4 text-upc-red mr-2 flex-shrink-0 mt-0.5"></i>
        <span class="text-xs text-slate-800 font-semibold">${p}</span>
      </div>
    `;
  }).join('');

  modalContent.innerHTML = `
    <div class="p-6 md:p-8">
      <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-sm" style="background: ${c.color}">
            ${c.acronym.split(' ')[0]}
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900 font-display">${c.name}</h3>
            <span class="text-sm font-bold text-upc-red">${c.acronym}</span>
          </div>
        </div>
        <button onclick="closeChapterModal()" class="text-slate-400 hover:text-slate-800 p-2">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>
      </div>

      <div class="py-6 space-y-6">
        <div>
          <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Descripción General</h4>
          <p class="text-slate-600 text-sm leading-relaxed">${c.description}</p>
        </div>

        <div class="p-4 rounded-2xl bg-red-50/60 border border-red-200/80">
          <h4 class="text-xs font-bold text-upc-red uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i data-lucide="activity" class="w-4 h-4"></i>
            <span>¿Qué actividades e investigación se realizan?</span>
          </h4>
          <p class="text-slate-800 text-sm leading-relaxed">${c.whatWeDo}</p>
        </div>

        <div>
          <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Iniciativas y Proyectos</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${projectsHtml}
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-200 flex justify-end space-x-3">
        <a href="${c.links.linktree}" target="_blank" rel="noopener noreferrer" class="btn-upc-primary text-xs">
          <span>Acceder al Linktree Oficial</span>
          <i data-lucide="arrow-up-right" class="w-4 h-4 ml-1.5"></i>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) window.lucide.createIcons();
};

window.closeChapterModal = function() {
  var modal = document.getElementById('chapter-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

function setupMobileMenu() {
  var toggleBtn = document.getElementById('pw-mobile-toggle');
  var menu = document.getElementById('pw-mobile-menu');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', function() {
    menu.classList.toggle('hidden');
  });

  if (menu.querySelectorAll) {
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() { menu.classList.add('hidden'); });
    });
  }
}
