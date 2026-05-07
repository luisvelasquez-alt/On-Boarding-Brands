const fs = require("fs");
const path = require("path");

const ROOT = "/Volumes/Datos y backup/GrupoDavid/Codex";
const OUTPUT = path.join(ROOT, "onboarding_marcas", "data.js");

const BRANDS = [
  {
    key: "ardene",
    name: "Ardene",
    folder: "Ardene_Genially",
    source: path.join(ROOT, "Ardene_Genially", "genially.html"),
    pdfSource: "/Users/luisvelasquez/Downloads/genially-68cafa25d1fcf3d4d2f3dffe.pdf",
    pdfReference: path.join(ROOT, "onboarding_marcas", "reference", "ardene_pdf_pages.txt"),
    theme: {
      accent: "#ff4fa2",
      accentSoft: "#ffd8ea",
      accentStrong: "#d81b78",
      background: "#fff7fb",
      surface: "#ffffff",
      surfaceAlt: "#ffeef6",
      text: "#24121d",
      muted: "#7a5a69",
      gradient: "linear-gradient(135deg, #fff7fb 0%, #ffd8ea 50%, #fff 100%)",
    },
    intro:
      "Una experiencia de onboarding enfocada en moda, cliente, producto y operación en tienda con una energía cercana, aspiracional y comercial.",
  },
  {
    key: "cottonon",
    name: "Cotton On",
    folder: "Cotton_On_Genially_Main",
    source: path.join(ROOT, "Cotton_On_Genially_Main", "genially.html"),
    pdfSource: "/Users/luisvelasquez/Downloads/genially-68939c61b5eb9e83c2e6ed53.pdf",
    pdfReference: path.join(ROOT, "onboarding_marcas", "reference", "cottonon_pdf_pages.txt"),
    theme: {
      accent: "#446b52",
      accentSoft: "#dbe7de",
      accentStrong: "#274532",
      background: "#f6f2ea",
      surface: "#fffdf9",
      surfaceAlt: "#ebe4d8",
      text: "#1d241f",
      muted: "#5f685f",
      gradient: "linear-gradient(135deg, #f6f2ea 0%, #ebe4d8 50%, #fffdf9 100%)",
    },
    intro:
      "Onboarding con ADN lifestyle australiano, foco en marca, cultura, VM, denim, KPIs y experiencia de cliente.",
  },
  {
    key: "lcw",
    name: "LC Waikiki",
    folder: "LCW_Genially",
    source: path.join(ROOT, "LCW_Genially", "genially.html"),
    pdfSource: "/Users/luisvelasquez/Downloads/genially-6909af552ffd66bf84593564.pdf",
    pdfReference: path.join(ROOT, "onboarding_marcas", "reference", "lcw_pdf_pages.txt"),
    theme: {
      accent: "#2347c6",
      accentSoft: "#dbe4ff",
      accentStrong: "#17318b",
      background: "#f5f8ff",
      surface: "#ffffff",
      surfaceAlt: "#eef3ff",
      text: "#14203f",
      muted: "#576483",
      gradient: "linear-gradient(135deg, #f5f8ff 0%, #dbe4ff 50%, #fff7c7 100%)",
    },
    intro:
      "Inducción orientada a misión, visión, servicio, comunicación, submarcas, prevención, VM y operación diaria de tienda.",
  },
  {
    key: "lufian",
    name: "Lufian",
    theme: {
      accent: "#767b82",
      accentSoft: "#e2e4e7",
      accentStrong: "#2f3338",
      background: "#f4f5f6",
      surface: "#ffffff",
      surfaceAlt: "#eaeced",
      text: "#1b1f24",
      muted: "#666c73",
      gradient: "linear-gradient(135deg, #f6f7f8 0%, #e2e4e7 48%, #ffffff 100%)",
    },
    intro:
      "Onboarding sobrio para una marca masculina premium, con foco en calidad, disciplina operativa, presentación impecable y conocimiento de colección.",
    heroImages: [
      {
        src: "assets/lufian/manual_cover.png",
      },
      {
        src: "assets/lufian/product_cover.png",
      },
      {
        src: "assets/lufian_womens/p1.png",
      },
      {
        src: "assets/lufian_womens/p2.png",
      },
    ],
    sections: [
      {
        title: "Bienvenida",
        bullets: [
          "Bienvenido a LUFIAN.",
          "La marca nació en 1995 ofreciendo diseño y producción para marcas globales de renombre y, desde 2005, opera orgullosamente bajo el nombre Lufian.",
          "Hoy Lufian se posiciona como un proveedor global de ropa informal de lujo para hombres, combinando comodidad, sofisticación y un estándar alto de producto y servicio.",
          "La propuesta de la marca invita a cada cliente a construir su propio estilo con libertad, personalidad y atención al detalle.",
        ],
        onboardingGuide: {
          headline: "Tu punto de partida en Lufian",
          intro:
            "Esta guía reúne el corazón del manual de operaciones y de la guía de producto para que tengas contexto rápido sobre la marca, la tienda y la colección.",
          cards: [
            {
              title: "Qué vas a aprender",
              body: "Cómo abrir y cerrar, cómo ordenar la operación, cómo proteger el stock y cómo presentar la colección con criterio.",
            },
            {
              title: "Qué define a Lufian",
              body: "Una imagen masculina premium, una colección cuidada y una ejecución de tienda limpia, coherente y muy bien presentada.",
            },
            {
              title: "Cómo trabajar aquí",
              body: "Con disciplina, criterio visual y una actitud atenta al cliente y al equipo, manteniendo siempre los estándares de marca.",
            },
          ],
          checklistTitle: "Enfoque para arrancar",
          checklist: [
            "Conoce la colección y sus categorías principales.",
            "Respeta los procedimientos de apertura, cierre y stock.",
            "Cuida el uniforme, la higiene y la presentación personal.",
            "Mantén la tienda ordenada, limpia y alineada con la imagen premium.",
          ],
          closing:
            "La meta es que cada turno se vea y se sienta como una experiencia Lufian consistente, elegante y confiable.",
        },
      },
      {
        title: "Equipo",
        bullets: [
          "El cliente debe estar en el centro de cada operación minorista.",
          "El equipo de tienda es el punto de contacto principal con el cliente, por eso debe guiar la mejor experiencia posible en todo momento.",
          "Cada persona del equipo representa a Lufian y al franquiciado local frente a todas las partes externas.",
          "La higiene, el atuendo y el aseo personal son muy importantes, y la política uniforme debe respetarse siempre.",
          "La actitud y la forma de interactuar con compañeros y clientes pesan más que la apariencia por sí sola.",
          "El desarrollo del talento interno y el reconocimiento del buen desempeño ayudan a mantener un equipo motivado y preparado para crecer.",
        ],
      },
      {
        title: "Operaciones",
        bullets: [
          "Procedimiento de apertura: revisar el exterior, encender luces, confirmar asistencia del equipo, hacer una reunión breve de 3 minutos, revisar el tablón de anuncios, retirar efectivo según política y dar un paseo por el piso de ventas.",
          "La reunión matutina debe energizar al equipo, aclarar expectativas del día, compartir resultados del día anterior y asignar tareas con claridad.",
          "Procedimiento de cierre: asegurar la tienda, completar el cierre de caja, preparar el depósito, guardar efectivo y documentos en la caja fuerte, dejar notas en el tablón y apagar todos los equipos y luces.",
          "El horario semanal debe estar pensado para cubrir momentos de mayor tráfico, evitar que la tienda quede con una sola persona y garantizar que un manager o assistant manager esté presente en aperturas y cierres.",
          "Las actividades mensuales incluyen reportes de ventas, seguimiento de competencia, revisión del entorno del centro comercial y feedback de producto al Brand Manager.",
          "Al cierre de temporada conviene revisar desempeño, compartir aprendizajes con el equipo y celebrar lo que funcionó bien.",
        ],
      },
      {
        title: "Stock",
        bullets: [
          "El control de existencias es crítico: si la mercancía no está en tienda, no se puede vender.",
          "Hay que hacer seguimiento al rendimiento versus objetivo y discutir variaciones importantes con el Brand Manager para sostener un flujo saludable de stock.",
          "Es importante entender los tiempos de entrega, el tránsito y las semanas de cobertura que necesita la tienda.",
          "La recepción de mercancía y el orden de bodega deben ser disciplinados para asegurar que el piso esté bien surtido y listo para vender.",
        ],
      },
      {
        title: "Limpieza y Prevención",
        bullets: [
          "La imagen de marca se sostiene también con limpieza, orden y prevención de pérdidas.",
          "La tienda debe revisarse con atención en vitrinas, maniquíes, iluminación, piso de ventas, probadores y área de almacenaje.",
          "Un recorrido matutino ayuda a detectar pequeñas oportunidades antes de que se conviertan en problemas operativos.",
          "El equipo debe actuar rápido ante cualquier conflicto, documentar incidentes y escalar a RR. HH. cuando sea necesario.",
        ],
      },
      {
        title: "Visual Merchandising",
        bullets: [
          "La presentación visual debe comunicar coherencia, orden y una sensación premium alineada con la marca.",
          "El piso de ventas, el mobiliario, la densidad de producto y la limpieza del espacio deben sostener una lectura clara y elegante.",
          "Las directrices de tienda, los informes y la comunicación interna ayudan a mantener consistencia entre tiendas y entre temporadas.",
          "En Lufian, el VM no solo ordena producto: también transmite estatus, claridad y calma visual.",
        ],
      },
      {
        title: "Colección y Producto",
        bullets: [
          "T.Shirts: la colección incorpora dos fits principales, regular y loose, con foco en diseño, print y la mejor calidad de tejidos.",
          "Polo T.Shirts: se presentan en básico, clásico y fashion, con una pared de polos que cambia por tienda según tamaño y layout.",
          "Knit T.Shirts: una propuesta cómoda y actual, ideal para el verano pero con piezas disponibles todo el año.",
          "Denim: ofrece cortes slim y regular, con lavados variados, diferentes pesos de tela y técnicas de acabado avanzadas.",
          "Shirts: trabaja cortes slim, regular y oversize; destacan las camisas de lino y Oxford, además de mezclas de algodón y algunos prints más atrevidos.",
          "Pants: la propuesta se divide en Classics, Chique y Fashion, con chinos, cinco bolsillos, opciones más formales y piezas con detalle moderno.",
          "Shorts: incluyen lifestyle shorts, active shorts y swim shorts, cada uno pensado para un uso distinto.",
          "Jackets y Outerwear: la colección va desde blazers hasta abrigos técnicos con ligereza, repelencia al agua, suavidad y abrigo sin volumen.",
        ],
        images: [
          {
            src: "assets/lufian/product_cover.png",
          },
          {
            src: "assets/lufian/product_page5.png",
          },
          {
            src: "assets/lufian/product_page9.png",
          },
        ],
        coverImage: "assets/lufian/product_cover.png",
      },
      {
        title: "Accesorios y Cierre",
        bullets: [
          "La línea de accesorios incluye belts, socks, boxers, wallets y una prueba de perfumes para las tiendas de Turquía que después se extenderán a otras regiones.",
          "Los calcetines cubren desde colores clásicos hasta versiones invisibles, deportivas y más divertidas; los boxers priorizan comodidad con mezcla de algodón y lycra.",
          "Las wallets son de piel y funcionan como complemento de venta o como regalo de valor.",
          "El estándar final de la experiencia debe dejar al cliente con una impresión de cuidado, calidad y confianza en la marca.",
        ],
      },
      {
        title: "Colección de Mujer",
        bullets: [
          "Womens Collection SS25 es una propuesta curada que introduce Lufian Womens al mercado con prendas atemporales, comodidad y una influencia de modernismo muy natural.",
          "La colección se apoya en una paleta sobria y en siluetas pensadas para hoy, con looks que trascienden temporadas.",
        ],
        images: [
          {
            src: "assets/lufian_womens/p1.png",
          },
          {
            src: "assets/lufian_womens/p2.png",
          },
        ],
        coverImage: "assets/lufian_womens/p1.png",
      },
      {
        title: "Materiales Mujer",
        bullets: [
          "Lino: utilizado en pantalones, vestidos y mezclas textiles; aporta frescura, textura visible y una lectura natural que envejece bien.",
          "Lyocell: mejora la caída del tejido y aporta suavidad sin perder estructura, especialmente en combinación con lino o algodón.",
          "Viscosa / Modal: presentes en camisetas y knitwear; aportan una sensación sedosa y una lectura visual limpia.",
          "Algodón: usado en tejidos planos y de punto; aporta confort y una sensación familiar al contacto con la piel.",
          "Poliamida / Poliéster: se combinan con fibras naturales para aportar resistencia, forma y una vida útil más larga.",
          "Bambú: aparece en pantalones de enfoque funcional y suma suavidad con una sensación fresca para el uso prolongado.",
          "Elastano: presente en pequeñas proporciones para que la prenda acompañe el cuerpo sin rigidez.",
        ],
      },
      {
        title: "T-Shirts Mujer",
        bullets: [
          "Signoria: camiseta de punto en mezcla de modal y poliéster, suave, fluida y ligera, pensada como base esencial del guardarropa contemporáneo.",
          "Isla: camiseta sin mangas en viscosa, poliéster y elastano; cómoda, elástica y de silueta limpia.",
          "Erote: camiseta de punto en algodón, poliamida y elastano; aporta estructura ligera y comodidad prolongada.",
          "Perses: camiseta con cuello en V, suave, elástica y favorecedora para el uso diario.",
          "Herme: camiseta cropped que equilibra proporciones con una lectura moderna y actual.",
          "Minioto: camiseta acanalada sin mangas, ajustada, suave y cómoda para looks contemporáneos.",
        ],
        images: [
          {
            src: "assets/lufian_womens/p5.png",
          },
          {
            src: "assets/lufian_womens/p9.png",
          },
        ],
      },
      {
        title: "Trousers Mujer",
        bullets: [
          "Concordia: pantalón de tejido plano con banda elástica en la cintura, cómodo, flexible y fresco para el uso diario.",
          "Asia: pantalón de lino con lyocell, pensado para climas cálidos y con una caída suave y controlada.",
          "Navasa: pantalón de lino con presencia marcada, respirable, natural y con carácter visual.",
        ],
        images: [
          {
            src: "assets/lufian_womens/p15.png",
          },
        ],
      },
      {
        title: "Sweaters Mujer",
        bullets: [
          "Ava: sweater de rayón con silueta relajada y caída natural, ligero y fluido.",
          "Kirke: punto calado en algodón y poliéster, ideal para entretiempo y para superponer.",
          "Emma: sweater sin mangas en viscosa, poliéster y lino, fresco y limpio en la lectura visual.",
          "Molly: sweater sin mangas en acrílico, lyocell y lino, con estructura ligera y caída controlada.",
          "Pearl: sweater sin mangas en viscosa y poliéster, suave, envolvente y con caída fluida.",
        ],
        images: [
          {
            src: "assets/lufian_womens/p21.png",
          },
        ],
      },
      {
        title: "Dresses Mujer",
        bullets: [
          "Selene: vestido largo de lino 100%, limpio, fresco y pensado para climas cálidos.",
          "Casares: vestido de silueta clásica y líneas limpias, equilibrado y natural en el cuerpo.",
        ],
        images: [
          {
            src: "assets/lufian_womens/p27.png",
          },
        ],
      },
      {
        title: "Cardigan y Vest",
        bullets: [
          "Lugano: cardigan de punto en viscosa y poliamida, suave, fluido y ligero.",
          "Ruma: chaleco de líneas limpias y estructura ligera, pensado para sumar carácter sin añadir peso.",
        ],
        images: [
          {
            src: "assets/lufian_womens/p29.png",
          },
        ],
      },
      {
        title: "Skirt y Shorts Mujer",
        bullets: [
          "Darsen: falda larga de silueta limpia y caída suave, versátil como base del look.",
          "Feronia: short de tejido plano en lyocell, lino y algodón, pensado para climas cálidos y uso prolongado.",
          "La colección femenina mantiene el mismo espíritu Lufian: naturalidad, comodidad, estética atemporal y una imagen muy cuidada.",
        ],
      },
    ],
  },
];

function stripHtml(html) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function isUsefulText(text) {
  if (!text || text.length < 12) return false;
  if (/^(siguiente|comenzar|español|felicitaciones)$/i.test(text)) return false;
  return true;
}

function isPrimarySlideName(name) {
  if (!name) return false;
  if (/^\s*copy/i.test(name)) return false;
  if (/^\s*\d+\s*$/i.test(name)) return false;
  return true;
}

function buildSlideNameMap(slides) {
  const map = {};
  let lastPrimary = "General";

  for (const slide of slides) {
    const rawName = (slide.Name || "").trim();
    if (isPrimarySlideName(rawName)) {
      lastPrimary = rawName;
      map[slide.Id] = rawName;
    } else {
      map[slide.Id] = lastPrimary;
    }
  }

  return map;
}

function isUsefulImage(image) {
  if (!image || image.IsHidden) return false;
  if (!image.Source) return false;
  if (!/\.(png|jpe?g|gif|webp)$/i.test(image.Source)) return false;
  if (/backgroundStandard|genially-text|mosca-2/i.test(image.Source)) return false;

  const width = parseFloat(image.Size?.Width || "0");
  const height = parseFloat(image.Size?.Height || "0");
  const area = width * height;
  const opacity = parseFloat(image.Opacity || "1");

  if (opacity < 0.25) return false;
  if (area < 12000) return false;
  return true;
}

function buildImagePath(folder, source) {
  return `assets/${folder}/${source.replace(/^\.\//, "")}`;
}

function reorderSectionBullets(brandKey, sectionTitle, bullets) {
  const items = [...bullets];

  if (brandKey === "lcw" && sectionTitle === "Bienvenida") {
    const first = "Bienvenido a nuestra familia!";
    const second = "¿Quienes Somos?";
    const ordered = [];

    if (items.includes(first)) ordered.push(first);
    if (items.includes(second)) ordered.push(second);

    for (const item of items) {
      if (!ordered.includes(item)) ordered.push(item);
    }

    return ordered;
  }

  if (brandKey === "ardene" && sectionTitle === "Nuestros Clientes") {
    const promoted = "Qué quieren Nuestros Clientes?";
    const ordered = [];

    if (items.includes(promoted)) ordered.push(promoted);
    for (const item of items) {
      if (!ordered.includes(item)) ordered.push(item);
    }

    return ordered;
  }

  return items;
}

function customizeSections(brandKey, sections) {
  let items = [...sections];

  if (brandKey === "ardene") {
    items = items.filter((section) => section.title !== "HOME");

    const bienvenida = items.find((section) => section.title === "Bienvenida");
    if (bienvenida) {
      bienvenida.bullets = [
        "Bienvenid@ al equipo Ardene!",
        "¡Estamos muy contentos de tenerte en nuestro equipo! A estas alturas ya has conocido a tu equipo y has recorrido la tienda, pero como nuevo miembro del equipo, todavía tenemos mucho que compartirte sobre tu función, nuestros clientes, tiendas, producto y empresa.",
        "Hemos diseñado esta capacitación como una experiencia de aprendizaje interactiva, interesante y estimulante que te proporcionará la base necesaria para sobresalir en Ardene y ser la mejor versión de ti.",
        "La mejor manera de aprender es a través de la participación, por lo que damos la bienvenida a las preguntas y fomentamos tu participación activa siempre que sea posible. ¡Sé curiosa e involúcrate!",
        "Esta guía te llevará a través de cada punto importante que debes conocer inicialmente de nuestro negocio.",
        "ESCUCHA. HAZ PREGUNTAS. TOMA NOTAS. PRÁCTICA.",
        "Utiliza todos los recursos de la tienda para obtener más información sobre tu función, tu tienda y la empresa. ¿Estás lista para empezar? ¡Genial, empecemos!",
      ];
      bienvenida.images = [];
      bienvenida.coverImage = null;
    }

    const personas = items.find((section) => section.title === "Personas");
    const ejercicio = items.find((section) => section.title === "Ejercicio Personas");
    if (personas && ejercicio) {
      const mergedBullets = [...personas.bullets];
      for (const bullet of ejercicio.bullets) {
        if (!mergedBullets.includes(bullet)) mergedBullets.push(bullet);
      }
      personas.bullets = mergedBullets;

      const mergedImages = [...(personas.images || [])];
      for (const image of ejercicio.images || []) {
        if (!mergedImages.some((entry) => entry.src === image.src)) mergedImages.push(image);
      }
      personas.images = mergedImages.slice(0, 4);
      personas.coverImage = personas.images[0]?.src || null;

      items = items.filter((section) => section.title !== "Ejercicio Personas");
    }

    const carta = items.find((section) => section.title === "Carta de Mark");
    if (carta) {
      carta.bullets = carta.bullets.filter(
        (bullet) => bullet !== "Bienvenido a ONE Ardene - Un nuevo capítulo. Una Visión Unificada."
      );
    }

    if (bienvenida) {
      bienvenida.onboardingGuide = {
        headline: "Tu punto de partida en Ardene",
        intro:
          "Entraste a un equipo que mezcla moda, energía comercial y aprendizaje constante. Esta guía está pensada para darte contexto rápido, seguridad en piso y una base clara para crecer desde el primer día.",
        cards: [
          {
            title: "Qué vas a conocer",
            body: "Tu función, nuestros clientes, la tienda, el producto y la empresa. La idea es que entiendas cómo se conecta todo para trabajar con más criterio y confianza.",
          },
          {
            title: "Cómo aprender mejor aquí",
            body: "Participa, pregunta y prueba. Esta capacitación funciona mejor cuando la vives de forma activa, no solo leyendo contenido.",
          },
          {
            title: "Qué esperamos de ti",
            body: "Curiosidad, atención al detalle y ganas de involucrarte. Ardene valora a las personas que se mueven con iniciativa y energía.",
          },
        ],
        checklistTitle: "Mindset para arrancar bien",
        checklist: [
          "Escucha con atención y toma notas de lo que te ayude en piso.",
          "Haz preguntas cuando algo no esté claro.",
          "Conecta cada tema con situaciones reales de tienda.",
          "Usa todos los recursos disponibles para seguir aprendiendo.",
        ],
        closing:
          "La meta no es solo terminar la guía, sino empezar con claridad, confianza y contexto para aportar desde el día uno.",
      };
      bienvenida.bullets = [
        "Bienvenid@ al equipo Ardene!",
      ];
    }

    const estructura = items.find((section) => section.title === "Estructura de Tienda");
    if (estructura) {
      const intro = estructura.bullets.find((bullet) =>
        bullet.includes("Ardene tiene una sólida reputación")
      );

      estructura.bullets = [
        intro ||
          "Ardene tiene una sólida reputación como un destino líder para la moda de valor que te hace lucir bien y sentirte bien. La experiencia de Ardene no estaría completa sin nuestros embajadores de marca a nivel de tienda.",
        "Supervisor de Distrito: Supervisa las tiendas Ardene y lidera ventas, operaciones, visual merchandising, entrenamiento, manejo del personal y prevención de pérdidas. También asegura el más alto nivel de servicio al cliente en todas las tiendas.",
        "Gerente de Tienda: Trabaja con el Supervisor del Distrito para dirigir todas las operaciones de la tienda, planificar estrategias que impulsen ventas y rentabilidad, y liderar comercialización, servicio al cliente, capacitación y desarrollo del equipo.",
        "Subgerente de Tienda: Apoya al Gerente de Tienda para alcanzar objetivos de venta, mejorar el rendimiento del equipo y garantizar operaciones eficientes. Debe liderar con el ejemplo, inspirar ventas y mantener un servicio al cliente excepcional. En ausencia del gerente, supervisa la operación de la tienda.",
        "Asociada de Ventas: Proporciona excelente servicio al cliente, apoya la mercancía, genera y procesa ventas y mantiene la limpieza y apariencia de la tienda. Entre sus competencias están saludar y acompañar al cliente, conocer producto y promociones, apoyar exhibiciones, reponer mercancía, procesar compras y cumplir políticas de la empresa.",
        "Bodega e Inventario: El empleado de inventario procesa toda la mercancía nueva y mantiene organizada la bodega y la tienda. Sus responsabilidades incluyen procesar envíos, mantener orden y limpieza y realizar tareas regulares de inventario y control.",
      ];
    }

    const somosArdene = items.find((section) => section.title === "Somos Ardene");
    if (somosArdene && somosArdene.bullets.length >= 2) {
      const first = somosArdene.bullets[0]?.trim();
      const second = somosArdene.bullets[1]?.trim();
      if (
        first === "El destino para la moda puntual y asequible" &&
        second === "para que te veas bien y te sientas bien."
      ) {
        somosArdene.bullets = [
          "El destino para la moda puntual y asequible para que te veas bien y te sientas bien.",
          ...somosArdene.bullets.slice(2),
        ];
      }

      const history = somosArdene.bullets.find((bullet) =>
        bullet.includes("Ardene es el destino de moda de valor definitivo")
      );

      somosArdene.bullets = [
        "El destino para la moda puntual y asequible para que te veas bien y te sientas bien.",
        history ||
          "Ardene es el destino de moda de valor definitivo en América del Norte y más allá. En 1982, Ardene comenzó como minorista de accesorios y joyas; hoy en día, la compañía está en un nivel completamente nuevo: vendiendo ropa, calzado, accesorios, joyas, ropa deportiva, prendas íntimas y más. Con más de 350 tiendas en Canadá y EE. UU., una presencia internacional en expansión y un negocio de comercio electrónico en crecimiento en ardene.com. La compañía se inspira en el mundo siempre cambiante de sus clientes. Ardene cree que la moda no debe ser exclusiva o intimidante, debe ser real, y debe celebrarse con confianza juvenil y entusiasmo intrépido. La misión de la compañía es conectar con los clientes ofreciendo experiencias de moda únicas e inspiradoras a los mejores precios.",
      ];
      somosArdene.identityCards = [
        {
          title: "Propósito",
          body: "Empoderar a los clientes de todo el mundo para que se expresen a través de la moda ofreciendo atuendos asequibles de pies a cabeza diseñados pensando en las personas y nuestro planeta.",
        },
        {
          title: "Esencia",
          body: "Somos optimistas. Miramos el lado positivo.",
        },
        {
          title: "Valores",
          body: "Nuestros valores son los estándares que fortalecen y apoyan nuestro negocio; son los principios rectores que nos ayudan a alcanzar nuestros objetivos.",
        },
        {
          title: "Carácter",
          body: "Con mentalidad comunitaria. Juntos, nunca solos. Creativo de corazón. Apasionadamente en el punto. Enfocado y editorial.",
        },
        {
          title: "Tono de Voz",
          body: "Relacionable, positivo y con los pies en la tierra; bienvenido. Imaginativo, atractivo y seguro, con energía. Apasionado, seguro y servicial, confiado.",
        },
      ];
    }

    const clientes = items.find((section) => section.title === "Nuestros Clientes");
    if (clientes && clientes.images && clientes.images.length === 1) {
      clientes.images = clientes.images.map((image) => ({
        ...image,
        fit: "contain",
      }));
    }

    const producto = items.find((section) => section.title === "Producto");
    if (producto && producto.images?.length) {
      const heroImage = producto.images.find((image) =>
        image.src.includes("06c5c112-dc53-4a56-a7d3-0d41dc62e3eb")
      ) || producto.images[0];
      const ticketImage = producto.images.find((image) =>
        image.src.includes("483d20fc-9626-4313-98ff-a1c31363f397")
      );

      producto.images = heroImage ? [heroImage] : [];
      producto.coverImage = heroImage?.src || null;

      if (ticketImage) {
        producto.inlineImageAfter = {
          match: "Etiqueta de producto",
          image: {
            ...ticketImage,
            fit: "contain",
          },
        };
      }

      producto.productGuide = {
        heroImage: heroImage?.src || null,
        seasonCard: {
          title: "Temporadas",
          body: "Ardene trabaja con más de 10,000 estilos por temporada. La Temporada A cubre Spring/Summer y se despacha de diciembre a mayo. La Temporada B cubre Fall/Winter y se despacha de junio a noviembre.",
        },
        hierarchyTitle: "Jerarquía de producto",
        hierarchyCards: [
          {
            title: "Group",
            body: "AP = Ropa, FW = Calzado, WL = Bolsos/Billeteras, AC = Accesorios.",
          },
          {
            title: "Dept#",
            body: "Cada departamento dentro de los grupos tiene un código numérico de 2 dígitos.",
          },
          {
            title: "Class",
            body: "Cada class ayuda a identificar precios puntuales y promociones.",
          },
          {
            title: "Style / ASN",
            body: "Código alfa-numérico de 11 dígitos. Combina año, temporada, grupo, 5 números aleatorios y mes code. Ejemplo: 9B-AP00680-01.",
          },
          {
            title: "SKU",
            body: "Número de identificación a nivel de talla; es el código de barras escaneable.",
          },
        ],
        labelGuide: ticketImage
          ? {
              title: "Etiqueta de producto",
              body: "La mercancía aún puede llegar con ticket canadiense o de EE. UU., por lo que debemos retirar esos precios antes de sacar producto a piso.",
              image: {
                src: ticketImage.src,
                fit: "contain",
              },
              checklist: [
                "Certificados",
                "Reciclable",
                "ASN",
                "Class",
                "SKU",
                "Precios",
                "Talla",
              ],
            }
          : null,
      };

      producto.bullets = [
        "Producto",
      ];
      producto.inlineImageAfter = null;
    }

    const departamentos = items.find(
      (section) =>
        section.title === "Departamentos y Categorías Copy" ||
        section.title === "Departamentos y Categorías"
    );
    if (departamentos) {
      departamentos.title = "Departamentos y Categorías";
      departamentos.departmentCards = [
        {
          title: "Tops",
          body:
            "Desde básicos esenciales hasta piezas trendy, los tops permiten a nuestros clientes expresarse día a día. Son la categoría más fácil de combinar y siempre generan venta cruzada. Claves: básicos + piezas de tendencia. Tips: siempre ofrecer como complemento de denim; promover packs o layering. Ejemplo de diálogo: “Este top básico es ideal para el día, y este trendy eleva tu look para la noche.”",
          image: {
            src: "assets/Ardene_Genially/images/fce37b2a-66c8-4756-abcc-25b41e6b7140.jpeg",
          },
        },
        {
          title: "Denim",
          body:
            "Denim es la base del armario Ardene. Es el producto más versátil y el más buscado por nuestros clientes. Claves: amplia variedad de fits como straight, baggy, wide leg, barrel y flare. Tips: promover fit guide y prueba en probador; cross-selling con tops y accesorios. Ejemplo de diálogo: “Este jean queda increíble con nuestros nuevos crop tops, ¿quieres probártelo con este top?”",
          image: {
            src: "assets/Ardene_Genially/images/0ca4d223-9497-4e71-a6d6-3de2624ad567.jpeg",
          },
        },
        {
          title: "Vestidos y Faldas",
          body:
            "Representan feminidad, versatilidad y estilo. Son perfectos para ocasiones especiales pero también para looks casuales con sneakers. Tips: ofrecer accesorios como cinturones, bolsos y joyería; resaltar versatilidad del look de día con sneakers o de noche con tacones. Ejemplo de diálogo: “Lo puedes usar casual con sneakers o elevarlo con accesorios y tacones.”",
          image: {
            src: "assets/Ardene_Genially/images/c8f0372f-a653-44d8-accc-18dc33a6f898.jpeg",
          },
        },
        {
          title: "Acc & Joyería",
          body:
            "Los accesorios son el generador de UPT perfecto: pequeños, fáciles de vender y con gran impacto en el look final. Además, tenemos una promoción activa todo el año: BOGO 50% OFF, lo que los convierte en un must para cada transacción. Tips: impulsar la venta en caja; resaltar valor emocional. Ejemplo de diálogo: “Completa tu look con este collar o bolso, queda perfecto con lo que llevas.”",
          image: {
            src: "assets/Ardene_Genially/images/b4cf4eef-00ad-4d8d-8214-a5a0c00d5c6d.jpeg",
          },
        },
        {
          title: "Calzado",
          body:
            "El calzado es clave para completar un look. Un par de sneakers o botines puede transformar un outfit básico en uno con estilo. Tips: ofrecer medias o accesorios de calzado; relacionar siempre con el outfit completo. Ejemplo de diálogo: “Estos sneakers combinan perfecto con tu jean baggy, y mira estas medias que completan el look.”",
          image: {
            src: "assets/Ardene_Genially/images/e9180df2-a00e-4249-9f76-29d2695f5d4c.jpeg",
          },
        },
        {
          title: "Ropa Íntima",
          body:
            "Intimates es una categoría de cercanía y confianza. Combina funcionalidad con estilo, y siempre invita a la compra por packs. Claves: bras, panties, sets y loungewear íntimo. Tips: sugerir el set completo; promover packs y promos; resaltar comodidad. Ejemplo de diálogo: “Este bra queda perfecto, y tenemos las panties a juego en promo 3x$$.”",
          image: {
            src: "assets/manual/ardene-ropa-intima.png",
          },
        },
        {
          title: "Swimwear",
          body:
            "Swimwear es sinónimo de temporada, escapadas y diversión. Siempre asociada a accesorios de verano. Claves: bikinis, trikinis, one-piece y cover-ups. Tips: ofrecer look completo con traje de baño, cover-up y bolso de playa; resaltar versatilidad; incentivar prueba. Ejemplo de diálogo: “Este bikini combina con este kimono y bolso de playa, ¿quieres probártelos juntos para ver el look completo?”",
          image: {
            src: "assets/Ardene_Genially/images/57168733-f106-4e21-822c-9d09940273aa.jpeg",
          },
        },
        {
          title: "MOVE",
          body:
            "Nuestra línea MOVE conecta con un cliente activo, moderno y aspiracional. Piezas que funcionan para el gym y para la calle, siempre con estilo. Claves: leggings, tops deportivos y chaquetas. Tips: hablar de versatilidad; ofrecer sets completos; cross-selling con sneakers y bolsos. Ejemplo de diálogo: “Este set es perfecto para entrenar, pero si lo combinas con esta chaqueta puedes usarlo para salir después.”",
          image: {
            src: "assets/Ardene_Genially/images/5ab66124-28be-4cb7-a2d4-f89285555edf.jpeg",
          },
        },
      ];
      departamentos.bullets = [
        "Cada categoría en Ardene es una oportunidad para elevar la experiencia del cliente y aumentar tanto UPT como conversión. Conoce qué destacar en cada una y cómo recomendar los productos de forma natural y aspiracional.",
        "Departamentos y Categorías",
      ];
      departamentos.images = [];
      departamentos.coverImage = null;
    }

    const guiaEstilos = items.find((section) => section.title === "Guía de Estilos");
    if (guiaEstilos) {
      guiaEstilos.title = "Guía de Estilos: Denim";
      guiaEstilos.bullets = [
        "Cada fit de denim expresa una actitud distinta. Usa esta guía para reconocer rápidamente la silueta, la energía del look y cómo recomendar cada estilo según el mood del cliente.",
      ];
      guiaEstilos.images = [];
      guiaEstilos.coverImage = null;
      guiaEstilos.styleGuideCards = [
        {
          title: "The Legacy",
          subtitle: "High Rise Jegging",
          body: "High rise jegging con stretch alto que se siente como legging y se lleva como jean. Súper favorecedor, cómodo y fácil de combinar con tops cortos o knitwear.",
          image: {
            src: "assets/denim-pk/the-legacy.jpg",
          },
        },
        {
          title: "The Untamed",
          subtitle: "Mid Rise Baggy",
          body: "Denim de inspiración vintage con tiro medio y entrepierna ultra relajada. Aporta una actitud cool y desgastada cuando se combina con crop tops o boxy jackets.",
          image: {
            src: "assets/denim-pk/the-untamed.jpg",
          },
        },
        {
          title: "The Off-Duty",
          subtitle: "Low Rise Wide Leg",
          body: "Silueta de tiro bajo y pierna ancha con referencia noventera. Se siente relajado pero elevado, ideal para looks casuales con intención.",
          image: {
            src: "assets/denim-pk/the-off-duty.jpg",
          },
        },
        {
          title: "The Indie",
          subtitle: "High Rise Barrel",
          body: "Jean de tiro alto con silueta barrel. Estructurado, urbano y poco convencional; ideal con tank tops, hoodies oversized o fits más editoriales.",
          image: {
            src: "assets/denim-pk/the-indie.jpg",
          },
        },
        {
          title: "The Era",
          subtitle: "Mid Rise Straight",
          body: "Clásico moderno de cintura media y pierna recta. Atemporal, versátil y fácil de llevar con sneakers o tacones para un look diario pulido.",
          image: {
            src: "assets/denim-pk/the-era.jpg",
          },
        },
        {
          title: "The Idol",
          subtitle: "Low Rise Flare",
          body: "Jean de tiro bajo, ajustado al cuerpo y acampanado desde la rodilla. Inspiración Y2K para looks de impacto con baby tee, plataformas o top de cuello alto.",
          image: {
            src: "assets/denim-pk/the-idol.jpg",
          },
        },
        {
          title: "The Muse",
          subtitle: "High Rise Mom",
          body: "Versión actualizada del mom jean, con tiro alto, pierna relajada y tobillo cónico. Nostálgico pero moderno, perfecto con tee blanca y fashion sneakers.",
          image: {
            src: "assets/denim-pk/the-muse.jpg",
          },
        },
        {
          title: "The Sunday",
          subtitle: "Low Rise (Slouchy)",
          body: "Jean relajado de cintura baja extendida y pierna ancha recta. Vibra effortless para días tranquilos; funciona perfecto con una camiseta corta o un suéter oversized.",
          image: {
            src: "assets/denim-pk/the-sunday.jpg",
          },
        },
      ];
    }

    const fits = items.find((section) => section.title === "Fits");
    if (fits) {
      fits.bullets = [
        "Usa esta guía para leer rápidamente cómo cambia cada fit según tiro, asiento y largo visual sobre el zapato.",
      ];
      fits.images = [];
      fits.coverImage = null;
      delete fits.inlineImageAfter;
      fits.fitsGuide = {
        chartSrc: "assets/denim-pk/fits-chart.png",
        fitTypes: [
          {
            title: "Mid Rise Straight",
            body: "Corte recto, talle medio. Equilibrado, clásico y fácil de recomendar como fit base.",
          },
          {
            title: "Low Rise Wide Leg",
            body: "Pierna ancha, talle bajo. Más relajado, con caída amplia desde la cadera.",
          },
          {
            title: "Low Rise Wide Leg Slouchy",
            body: "Pierna ancha relajada, talle bajo. Mucha soltura visual y una caída despreocupada.",
          },
          {
            title: "Mid Rise Baggy",
            body: "Corte amplio, talle medio. Más espacio en cadera y muslo con una sensación casual.",
          },
        ],
        notes: [
          {
            title: "Seat y Hips",
            body: "La cadera y el asiento son buenos indicadores para entender cómo se ajusta realmente un estilo en esa zona.",
          },
          {
            title: "Front Rise",
            body: "La fourche avant o tiro frontal va desde el centro de la entrepierna hasta la parte superior de la cintura.",
          },
          {
            title: "Inseam",
            body: "La entrepierna se mide desde el centro del crotch hasta el dobladillo y define el largo visual del jean.",
          },
          {
            title: "Leg Opening",
            body: "La abertura de pierna indica cómo caerá el fit alrededor del tobillo o directamente sobre el zapato.",
          },
        ],
      };
    }

    const telas = items.find((section) => /^Nuestras Telas(?: Copy)?$/i.test(section.title));
    if (telas) {
      telas.title = "Nuestras Telas";
      telas.bullets = [
        "El denim Ardene se organiza en tres familias de tela. Esta guía te ayuda a reconocer rápidamente cuál recomendar según la sensación, el nivel de stretch y la ocasión de uso.",
      ];
      telas.images = [];
      telas.coverImage = null;
      telas.fabricGuide = {
        summary: {
          title: "Cómo leer la familia de telas",
          body: "Empieza por identificar cuánto stretch necesita el cliente. Si busca estructura y autenticidad, ve hacia rigid. Si quiere movimiento sin perder look denim, comfort stretch es la base. Si prioriza comodidad total y ajuste amable al cuerpo, super stretch es la opción más fácil de vender.",
        },
        cards: [
          {
            label: "100% algodón",
            title: "Rigid | Rígido",
            body: "Denim firme, sin elasticidad y con presencia más auténtica. Mantiene la estructura, se ve más clásico y funciona muy bien cuando queremos una silueta con carácter y acabado vintage.",
          },
          {
            label: "99% algodón · 1% spandex",
            title: "Comfort Stretch | Elasticidad cómoda",
            body: "La opción intermedia. Conserva el look del denim tradicional, pero suma un toque de flexibilidad para moverse mejor en el día a día sin perder definición en la silueta.",
          },
          {
            label: "66% algodón · 30% poliéster · 2% rayón · 2% spandex",
            title: "NEW! Super Stretch | Extensibilidad elevada",
            body: "La tela más suave y adaptable del grupo. Abraza el cuerpo con mucha comodidad, se siente ligera al usarla y es ideal para clientes que buscan una experiencia casi tipo legging.",
          },
        ],
      };
    }

    const vm = items.find((section) => section.title === "VM");
    if (vm) {
      vm.bullets = [
        "El Visual Merchandising (VM) es la herramienta clave para conectar el producto con el cliente. En Ardene, nuestras pautas visuales no son solo una guía estética, sino un sistema que asegura que cada tienda proyecte orden, actualidad y coherencia de marca.",
        "Rutina diaria de apertura: Revisar vitrinas limpias y sin polvo, maniquíes actualizados según el último launch package, iluminación y señalización al día, piso despejado, producto lleno y marketing correctamente implementado.",
        "Orden de ejecución de las directrices: Priorizar windows/vitrinas, luego trend tables o shoe poles, después secciones de pared de adelante hacia atrás, mesas y commodity fixtures, y finalmente grids y accesorios.",
        "Plano de tienda y bloques de color: La tienda se organiza por secciones para simplificar el flujo de colecciones y temporadas. Los bloques de color siguen transición de claro a oscuro, usando neutros como puente entre colores más vibrantes.",
        "Cash Desk e in-queue line: La caja es un punto clave de impulso. Debe mostrar bolsas reutilizables, cosméticos, accesorios y artículos pequeños agrupados por categorías y con coherencia de precios y seguridad.",
        "Etiquetas y precio: Las etiquetas Ardene contienen información clave como estilo, temporada, SKU y precio regular. Entenderlas acelera reposición, organización y lectura del producto en piso.",
        "Calzado y accesorios: La exhibición cambia según temporada. Se presentan sneakers, botas, flats, sandalias y bolsos de forma estratégica. Los accesorios se agrupan por tema para evitar confusión de precios.",
        "Reglas de colgado y presentación: Los ganchos metálicos siempre miran a la izquierda, se usan espumas para prendas delicadas y existen lineamientos específicos para tops, bottoms, lencería y swimwear para que el piso se vea impecable y uniforme.",
        "Iconografía y comunicación visual: Ardene usa un sistema de íconos para identificar estilos prioritarios, inventarios altos o bajos, montajes obligatorios u opcionales y productos ubicados en mini-stands, grids o racks especiales.",
      ];
    }

    const kpi = items.find((section) => section.title === "KPI");
    if (kpi) {
      kpi.bullets = [
        "Los Indicadores Clave de Rendimiento (KPIs) son la brújula de la tienda. Nos muestran cómo estamos trabajando, qué debemos mejorar y cómo impactamos directamente en los resultados.",
        "Tráfico: Número de clientes que entran a la tienda en un periodo determinado. Es la base de todos los demás KPIs y ayuda a planificar staffing, activaciones y prioridades de piso.",
        "Conversión (%): Porcentaje de clientes que entran y terminan comprando. Fórmula: Transacciones / Tráfico x 100. Es el KPI más crítico porque mide qué tan bien transformamos visitas en ventas.",
        "UPT: Promedio de unidades vendidas por transacción. Fórmula: Unidades vendidas / Transacciones. Impulsa ticket promedio y rotación de inventario; se mejora con venta adicional y promociones como BOGO 50% OFF.",
        "DPT / APT: Valor económico promedio de cada transacción. Fórmula: Ventas totales / Transacciones. Refleja cuánto dinero deja cada cliente que compra y sube con looks completos y productos de mayor valor.",
        "% Comp vs. LY: Compara ventas actuales con el mismo periodo del año anterior. Ayuda a medir crecimiento año contra año e identificar qué semanas o categorías impulsan o frenan el resultado.",
        "% Comp vs. Plan: Compara ventas reales con el presupuesto o meta definida. Sirve para entender si se está cumpliendo el plan y qué KPI está generando el gap.",
      ];
    }

    const dinamica = items.find((section) => section.title === "Dinámica de Tienda");
    if (dinamica) {
      dinamica.bullets = [
        "Para tener una buena dinámica de tienda, es necesario comprender cómo debe fluir la operación durante el día para garantizar una excelente experiencia al cliente, altos niveles de venta y un ambiente de trabajo organizado.",
        "Roles y Zonas clave: Cada asociado tiene un rol definido y zonas asignadas por turno para cubrir piso, probadores, caja, reposición y apoyo operativo según la necesidad del momento.",
        "Flujos durante el día: Apertura con checklist visual, reposición y brief rápido; horas pico con refuerzo en probadores y caja; horas de bajo tráfico para reposición, cambios de visual y preparación del día siguiente; cierre con revisión de probadores, piso, caja y checklist final.",
        "Estándares de Atención: Conecta (saludo inmediato con energía y estilo), Descubre (preguntas sobre necesidades), Recomienda (mostrar opciones y complementar con accesorios o promos) y Cierra (confirmar decisión y despedir con buena vibra).",
        "Comunicación Interna: Uso de grupo de WhatsApp o canal interno para incidencias y prioridades, informe de rendimiento semanal y visitas virtuales con equipo de casa matriz.",
      ];
    }

    const felicitacionesIndex = items.findIndex((section) => section.title === "Felicitaciones");
    if (felicitacionesIndex !== -1) {
      items.splice(felicitacionesIndex, 0, {
        title: "Evaluación",
        bullets: ["Quiz Time"],
        images: [],
        coverImage: null,
        quizData: {
          intro:
            "Responde las siguientes preguntas y demuestra que estás lista para brillar en tienda. Cada pregunta usa opciones reales del playbook de Ardene.",
          questions: [
            {
              question: "¿Cuál es el propósito principal de We Ardene?",
              options: [
                "Ser una marca exclusiva y de lujo",
                "Vender sólo denim",
                "Conectar con los clientes ofreciendo moda accesible, auténtica y divertida",
                "Crecer únicamente en EE. UU.",
              ],
            },
            {
              question: "¿Qué significa Conecta en los Estándares de Atención?",
              options: [
                "Confirmar la decisión del cliente",
                "Saludo inmediato y con energía",
                "Preguntar necesidades",
                "Mostrar productos alternativos",
              ],
            },
            {
              question: "¿Qué piezas son clave en la línea MOVE?",
              options: [
                "Jeans y crop tops",
                "Vestidos y faldas",
                "Leggings, tops deportivos y chaquetas",
                "Bikinis y cover-ups",
              ],
            },
            {
              question: "¿Qué tip de venta aplica en Swimwear?",
              options: [
                "Evitar venta cruzada",
                "Enfocarse solo en precio",
                "Ofrecer look completo (baño + cover-up + bolso)",
                "Hablar de promociones en denim",
              ],
            },
            {
              question: "El denim en Ardene se considera:",
              options: [
                "Una categoría secundaria",
                "La base del armario y lo más buscado por clientes",
                "Un producto exclusivo para invierno",
                "Solo para The Seeker persona",
              ],
            },
            {
              question: "El Tiro Medio Recto se describe como:",
              options: [
                "Pierna ancha, cintura baja",
                "Pierna relajada y cintura baja",
                "Corte recto, cintura media-alta",
                "Corte holgado, cintura media",
              ],
            },
            {
              question: "El tráfico mide:",
              options: [
                "Ticket promedio",
                "Ventas totales",
                "Unidades por transacción",
                "Número de clientes que entran a tienda",
              ],
            },
            {
              question: "Fórmula de Conversión (%):",
              options: [
                "Transacciones ÷ Tráfico × 100",
                "Ventas ÷ Inventario × 100",
                "Ventas ÷ Tráfico",
                "Unidades ÷ Transacciones × 100",
              ],
            },
            {
              question: "Si entran 1,200 clientes y se generan 360 transacciones, la conversión es:",
              options: ["35%", "30%", "20%", "25%"],
            },
            {
              question: "El KPI UPT mide:",
              options: [
                "Promedio de dinero gastado por cliente",
                "Promedio de unidades vendidas por transacción",
                "Porcentaje de clientes que compran",
                "Cantidad de clientes que entran a tienda",
              ],
            },
            {
              question: "Si se vendieron 500 unidades en 200 transacciones, el UPT es:",
              options: ["2.5", "2.0", "3.5", "3.0"],
            },
            {
              question: "El KPI DPT / APT refleja:",
              options: [
                "El número de unidades vendidas por día",
                "El inventario disponible",
                "El total de clientes que entran a tienda",
                "El valor económico promedio de cada transacción",
              ],
            },
            {
              question: "Si las ventas fueron $4,000 con 200 transacciones, el DPT es:",
              options: ["$15", "$18", "$20", "$25"],
            },
            {
              question: "El indicador % Comp vs LY compara:",
              options: [
                "Tráfico de clientes por hora",
                "Ventas actuales con las del mismo periodo del año anterior",
                "UPT contra DPT",
                "Ventas reales con presupuesto",
              ],
            },
            {
              question: "El indicador % Comp vs Plan mide:",
              options: [
                "Crecimiento año contra año",
                "Nivel de rotación de inventario",
                "Cumplimiento de la meta establecida",
                "Porcentaje de clientes que repiten compra",
              ],
            },
            {
              question: "Durante horas pico, la prioridad es:",
              options: [
                "Preparación de mercadería para el día siguiente",
                "Cambio de visual en piso",
                "Reposición de producto en backroom",
                "Refuerzo en probadores y caja",
              ],
            },
            {
              question: "Durante horas de bajo tráfico se debe:",
              options: [
                "Ignorar probadores",
                "Enfocarse solo en caja",
                "Atender únicamente clientes frecuentes",
                "Reponer producto y preparar mercadería del día siguiente",
              ],
            },
          ],
          footer:
            "Cuando termines, registra tu finalización para que quede constancia de tu participación y podamos seguir tu progreso en tienda.",
        },
      });

      const felicitaciones = items[felicitacionesIndex + 1];
      felicitaciones.bullets = [
        "¡Felicitaciones!",
        "Has completado con éxito tu recorrido por el Playbook de Onboarding. Ahora conoces la forma en la que trabajamos juntos para ofrecer la mejor experiencia a nuestros clientes. Este es solo el comienzo: cada día en tienda será una oportunidad para poner en práctica lo aprendido y crecer profesionalmente. Próximo paso: registra tu finalización en el formulario para que quede constancia de tu participación.",
      ];
    }

    const dressCode = items.find((section) => section.title === "Dress Code");
    if (dressCode) {
      dressCode.images = (dressCode.images || []).filter((_, index) => index !== 1);
      dressCode.coverImage = dressCode.images[0]?.src || null;
      dressCode.bullets = dressCode.bullets
        .filter(
          (bullet) =>
            bullet !==
              "• Debe ser negro sólido, gris, blanco o denim. • Todas las líneas del cuello deben proporcionar una cobertura adecuada. • Los tops cortos solo se pueden usar con pantalones altos y no deben exponer el ombligo. • No se permiten camisetas sin mangas a menos que sean capas con una chaqueta, camisa o cárdigan. • Se permiten camisetas de longitud completa, sudaderas, sudaderas con capucha y camisas con botones. • Los botones deben estar estilizados con no más de tres botones deshechos." &&
            bullet !== "Look Good, Feel Good"
        )
        .map((bullet) => {
          if (bullet.startsWith("• Debe ser negro sólido, gris o denim.")) {
            return `Tops: ${bullet.replace(/^•\s*/, "")}`;
          }
          if (bullet.startsWith("• Debe ser negro sólido, gris, blanco o denim. • No debe ser más corto")) {
            return `Bottoms: ${bullet.replace(/^•\s*/, "")}`;
          }
          if (bullet.startsWith("• Se recomienda el uso de zapatos Ardene.")) {
            return `Calzado: ${bullet.replace(/^•\s*/, "")}`;
          }
          if (bullet.startsWith("• No se permiten logotipos visibles de otras marcas")) {
            return `Otros: ${bullet.replace(/^•\s*/, "")}`;
          }
          return bullet;
        });
    }

    if (personas) {
      personas.bullets = personas.bullets.map((bullet, index) => {
        if (index !== 1) return bullet;

        return [
          "En Ardene, cada cliente tiene una historia, un estilo y una motivación distinta. Para conectar de verdad y ofrecer una experiencia memorable, necesitamos reconocer rápidamente qué tipo de persona tenemos en frente y adaptar nuestra forma de interactuar con ella.",
          "",
          "Trabajaremos con dos de nuestras principales",
          "",
          "<strong>Ardene Personas</strong>",
          "<strong>Dreamer</strong> joven creativa, experimental, busca autenticidad.",
          "<strong>Seeker</strong> aspiracional, pulida, siempre en busca de elevar su estilo.",
          "",
          "Tip del ejercicio: En cada role play, concéntrate en cómo hablas, qué productos sugieres y qué palabras usas. La clave está en adaptar tu energía al perfil del cliente para generar conexión y aumentar conversión.",
        ]
          .join("<br>")
          .replace(/(<br>){3,}/g, "<br><br>");
      });

      const learnIndex = personas.bullets.findIndex(
        (bullet) => bullet.trim() === "Aprende a Identificar Personas"
      );
      if (learnIndex > 1) {
        const [learnBullet] = personas.bullets.splice(learnIndex, 1);
        personas.bullets.splice(1, 0, learnBullet);
      }
    }

    const cultura = items.find(
      (section) => section.title === "Cultura de Tienda y Experiencia del Cliente"
    );
    if (cultura) {
      const top20 = cultura.bullets.find((bullet) =>
        bullet.includes("La inversión en nuestro Top 20")
      );
      const intro = cultura.bullets.find((bullet) =>
        bullet.includes("En Ardene, somos el rostro de la marca")
      );
      const title = cultura.bullets.find(
        (bullet) => bullet.trim() === "Buenas Prácticas en la Experiencia Cliente"
      );
      const cultureBlock = cultura.bullets.find(
        (bullet) => bullet.trim() === "Cultura de Tienda y Experiencia Cliente"
      );
      const mystery = cultura.bullets.find(
        (bullet) => bullet.trim() === "Mystery Shopper Interno"
      );
      const mysterySteps = cultura.bullets.find((bullet) =>
        bullet.startsWith("1. Observa 5 interacciones reales en tienda")
      );

      cultura.bullets = [
        intro ||
          "En Ardene, somos el rostro de la marca. Cada interacción es una oportunidad para reflejar lo que nos define: energía positiva, accesibilidad y autenticidad. No se trata solo de atender a un cliente, sino de crear conexiones reales que hagan que cada visita sea memorable.",
        title || "Buenas Prácticas en la Experiencia Cliente",
        "Entrada: Recibir clientes con saludo en menos de 30 segundos.",
        "Probadores: Control de prendas, ofrecer tallas alternativas, sugerir combinaciones.",
        "Reconectar en probador y caja: ofrecer tallas, sugerir complementos, recomendar un accesorio final.",
        "Caja: Procesar pagos de forma ágil, ofrecer upsell (accesorios, promos vigentes) y reforzar despedida positiva.",
        top20 ||
          "La inversión en nuestro Top 20 nos permite mostrarnos con confianza en el VM y el marketing. Entregamos el producto por el que nuestro cliente está votando y esto, a su vez, impulsa las ventas al inspirar a nuestro cliente a comprar. Los productos del top 20 por marca se pueden encontrar en el kit de herramientas de experiencia del cliente y en los boletínes mensuales.",
        cultureBlock || "Cultura de Tienda y Experiencia Cliente",
        mystery || "Mystery Shopper Interno",
        mysterySteps ||
          "1. Observa 5 interacciones reales en tienda (puede ser de otro compañero o incluso de tu gerente). 2. Evalúa: • ¿Hubo saludo entusiasta? • ¿Se ofreció ayuda de forma accesible y natural? • ¿El cliente se sintió empoderado y acompañado? • ¿La interacción fue auténtica (no forzada)? 3. Al final del día, comparte un breve resumen con el equipo: qué interacción fue más auténtica y por qué.",
      ];
    }

    const weArdene = items.find((section) => section.title === "WE ARDENE");
    if (weArdene) {
      const intro = weArdene.bullets.find((bullet) =>
        bullet.includes("Hay muchas maneras en las que puedes marcar la diferencia")
      );
      const paraDejaMueve = weArdene.bullets.find(
        (bullet) => bullet.trim() === "PARA, DEJA, MUEVE"
      );
      const setup = weArdene.bullets.find((bullet) =>
        bullet.includes("A menudo se te pedirá que hagas malabares")
      );

      weArdene.bullets = [
        setup ||
          'A menudo se te pedirá que hagas malabares con muchas tareas a la vez, pero no hay nada más importante que el cliente. Tres técnicas simples te permitirán completar tus tareas y "Ser Ardene":',
        paraDejaMueve || "PARA, DEJA, MUEVE",
        intro ||
          "Hay muchas maneras en las que puedes marcar la diferencia con cada cliente. Comienza creando un entorno en el que los clientes disfrutan de pasar tiempo y quieren volver; no solo por los increíbles productos y el valor, sino porque TÚ los hiciste sentir bienvenidos y apreciados. ¿Qué significa ser WE ARDENE? ¡Lea a continuación para averiguarlo!.",
        "WE ARDENE:<br><strong>WE</strong> Welcoming Energetic (Bienvenida energética).<br><strong>A</strong> Acknowledge / Reconocer cada cliente y recomendar promociones.<br><strong>R</strong> Re-Acercamiento y haz preguntas abiertas.<br><strong>D</strong> Demuestra los productos que pueden funcionar para el cliente.<br><strong>E</strong> Engage / Conecta sugiriendo productos adicionales que complementen y funcionen en probadores.<br><strong>N</strong> Nota si hay dudas y cambia su perspectiva elogiando las opciones escogidas.<br><strong>E</strong> Excede las expectativas en la caja e invítalos a volver.",
      ];
    }
  }

  if (brandKey === "lcw") {
    const mision = items.find((section) => section.title === "Mision & Vision");
    if (mision) {
      mision.bullets = [
        "Nuestra Misión",
        "Basado en la creencia de \"Todo el mundo merece vestirse bien\", buscamos hacer que nuestros clientes se sientan bien ofreciendo productos adecuados para sus necesidades, estilo y presupuesto en un entorno de compras fácil y agradable. Como LC Waikiki, seguimos persiguiendo nuestra pasión en línea con nuestro objetivo, basado en los principios de satisfacción de empleados, clientes y proveedores, responsabilidad social y sostenibilidad.",
        "Nuestra Visión",
        "Nuestro objetivo es hacer que la moda sea asequible en todo el mundo alcanzando nuestra visión de convertirnos en una de las tres marcas minoristas de moda más exitosas de Europa en los próximos años.",
        "NUESTROS VALORES: Estar orientados al cliente · Ser virtuosos · Logros en conjunto · Adquirir una experiencia en profundidad · Enfrentarse a los desafíos",
      ];
    }

    const servicio = items.find((section) => section.title === "Servicio al Cliente");
    if (servicio) {
      servicio.images = [
        {
          src: "assets/LCW_Genially/images/8c3e5146-f70c-41c6-9451-a30d46f7327b.png",
          width: 359.93085040200543,
          height: 201.44857772010482,
        },
      ];
      servicio.coverImage = servicio.images[0].src;
    }

    const comunicacion = items.find((section) => section.title === "Comunicación");
    if (comunicacion) {
      comunicacion.bullets = [
        "Comunicación con los clientes y entre nosotros",
        "Para entender las necesidades del cliente, debemos centrarnos en el uso de preguntas abiertas, como: “¿Puedes describir el producto que estás buscando?”, “¿En qué ocasión quieres usarlo?”, “¿Cómo sería el producto ideal que estás buscando?” y “¿Qué beneficios o características esperas del producto?”. Si es necesario, también podemos usar preguntas cerradas o alternativas. Mientras se comunica con los miembros del equipo, sea siempre respetuoso y educado, no grite en el área de ventas y utilice normas de cortesía al hablar con compañeros internos o externos.",
        "Comunicación en probadores",
        "La posibilidad de comprar un producto aumenta si el cliente se lo prueba. Debemos guiarlo al probador, quedarnos cerca para apoyar con tallas o alternativas, recomendar combinaciones adicionales e informar sobre campañas vigentes. También ayuda a reducir devoluciones y mejora la experiencia del cliente.",
        "Quejas de Clientes",
        "Las quejas son una oportunidad para demostrar nuestro enfoque centrado en el cliente. Debemos escuchar sin interrumpir, tomar la inquietud en serio, responder positivamente siempre que sea posible y disculparnos sinceramente por cualquier inconveniente. Si la situación escala o no puede resolverse en el momento, debe involucrarse al gerente de tienda o al representante correspondiente.",
        "Servicio en Caja",
        "El servicio en caja debe ser rápido, amable y preciso. Si hay más de dos clientes esperando, se deben abrir más cajas si es posible. Mantenga contacto visual, informe el total, comunique campañas vigentes, doble cuidadosamente los productos, revise que se hayan retirado las alarmas y cierre la interacción agradeciendo con una sonrisa.",
        "Cambios y Devoluciones",
        "La devolución y el reemplazo del producto son parte del servicio al cliente. Debemos preguntar cortésmente la razón del cambio o devolución y ayudar siempre con actitud positiva, explicando el proceso con claridad y buscando una solución ágil.",
        "Información de Producto",
        "La información del producto incluye talla, colores disponibles, instrucciones de lavado y mantenimiento, características, beneficios y políticas ecológicas. Al compartirla, debemos reforzar el valor del producto. Si no sabemos una respuesta, debemos decirlo con amabilidad y pedir apoyo al gerente.",
        "Reconociendo señales",
        "Algunos clientes dudan en pedir ayuda. Debemos estar atentos a señales como buscar tallas, comparar productos con su cuerpo, intentar combinaciones, tratar de alcanzar un producto o verse confundidos o frustrados. Cuando detectamos estas señales, debemos detener lo que estamos haciendo y ofrecer ayuda de inmediato.",
      ];
    }

    const exito = items.find((section) => section.title === "Éxito en tienda");
    if (exito) {
      exito.bullets = [
        "Factores claves para éxito de tu tienda",
        "Organización: La organización es la base de una experiencia de compra fluida. Cada prenda debe estar ubicada en el fixture, pared o mesa asignada, según el planograma y los estándares de VM. Una tienda organizada facilita la reposición, optimiza el flujo del cliente y mejora la eficiencia del equipo.",
        "Gerente en Piso de Ventas: La presencia del gerente en piso de ventas asegura seguimiento de la operación en tiempo real, apoyo al equipo, foco comercial y reacción rápida ante necesidades del cliente y prioridades del día.",
        "Servicio al cliente: El cliente es el centro de todo lo que hacemos. Brindar un servicio cálido, rápido y respetuoso fortalece la relación con la marca. Escuchar activamente, resolver inquietudes y ofrecer soluciones proactivas convierte cada visita en una experiencia positiva y memorable.",
        "Fullness: Mantener fullness significa asegurar que la tienda se vea abastecida, equilibrada y lista para vender en todo momento, evitando vacíos visibles y protegiendo la experiencia de compra.",
        "Limpieza: Una tienda limpia transmite orden, confianza y calidad. La limpieza constante del piso de ventas, probadores, caja y muebles impacta directamente en la percepción del cliente.",
        "VM: El visual merchandising comunica la identidad de la marca. Aplicar correctamente las directrices de VM ayuda a resaltar productos clave, generar combinaciones inspiradoras y mantener coherencia con la campaña vigente. Un VM efectivo impulsa la conversión y eleva la experiencia visual del cliente.",
      ];
    }
  }

  return items.map((section, index) => ({
    ...section,
    id: `${brandKey}-${index + 1}`,
  }));
}

function extractBrand(brand) {
  if (brand.sections) {
    const sections = brand.sections.map((section, index) => ({
      ...section,
      id: `${brand.key}-${index + 1}`,
    }));

    const heroImages = (brand.heroImages || [])
      .map((image) => ({ ...image }))
      .slice(0, 4);

    const stats = brand.stats || {
      sections: sections.length,
      points: sections.reduce((sum, section) => sum + (section.bullets?.length || 0), 0),
      images: sections.reduce((sum, section) => sum + (section.images?.length || 0), 0),
    };

    return {
      key: brand.key,
      name: brand.name,
      intro: brand.intro,
      theme: brand.theme,
      stats,
      heroImages,
      sections,
    };
  }

  const html = fs.readFileSync(brand.source, "utf8");
  const match = html.match(/window\.dataBase64=\"([^\"]+)\"/);
  if (!match) {
    throw new Error(`No pude extraer dataBase64 desde ${brand.source}`);
  }

  const parsed = JSON.parse(Buffer.from(match[1], "base64").toString("utf8"));
  const slideNames = buildSlideNameMap(parsed.Slides);
  const grouped = new Map();
  const imageGroups = new Map();

  for (const text of parsed.Texts || []) {
    const slideName = slideNames[text.IdSlide] || "";
    if (!slideName) continue;

    const clean = stripHtml(text.TextMessage || "");
    if (!isUsefulText(clean)) continue;

    if (!grouped.has(slideName)) grouped.set(slideName, []);
    const items = grouped.get(slideName);
    if (!items.includes(clean)) items.push(clean);
  }

  for (const image of parsed.Images || []) {
    const slideName = slideNames[image.IdSlide] || "";
    if (!slideName || !isUsefulImage(image)) continue;

    if (!imageGroups.has(slideName)) imageGroups.set(slideName, []);
    const items = imageGroups.get(slideName);
    const relativePath = buildImagePath(brand.folder, image.Source);
    const width = parseFloat(image.Size?.Width || "0");
    const height = parseFloat(image.Size?.Height || "0");
    const area = width * height;

    if (!items.some((entry) => entry.src === relativePath)) {
      items.push({
        src: relativePath,
        width,
        height,
        area,
      });
    }
  }

  let sections = [...grouped.entries()].map(([title, bullets], index) => {
    const orderedBullets = reorderSectionBullets(brand.key, title, bullets);
    const images = (imageGroups.get(title) || [])
      .sort((a, b) => b.area - a.area)
      .slice(0, 4)
      .map(({ src, width, height }) => ({ src, width, height }));

    return {
      id: `${brand.key}-${index + 1}`,
      title,
      bullets: orderedBullets,
      images,
      coverImage: images[0]?.src || null,
    };
  });

  sections = customizeSections(brand.key, sections);

  const heroImages = sections
    .flatMap((section) => section.images || [])
    .filter((image, index, array) => array.findIndex((item) => item.src === image.src) === index)
    .slice(0, 4);

  const stats = {
    sections: sections.length,
    points: sections.reduce((sum, section) => sum + section.bullets.length, 0),
    images: sections.reduce((sum, section) => sum + section.images.length, 0),
  };

  return {
    key: brand.key,
    name: brand.name,
    intro: brand.intro,
    theme: brand.theme,
    stats,
    heroImages,
    sections,
  };
}

const payload = BRANDS.map(extractBrand);
const output = `window.BRAND_ONBOARDING_DATA = ${JSON.stringify(payload, null, 2)};\n`;

fs.writeFileSync(OUTPUT, output);
console.log(`Data escrita en ${OUTPUT}`);
