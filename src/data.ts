import { TranslationDict, InstallationItem, ProductCategory } from './types';

export const translations: Record<'ca' | 'es', TranslationDict> = {
  ca: {
    navInici: 'Inici',
    navEmpresa: 'Empresa',
    navProductes: 'Productes',
    navDistribucio: 'Distribució',
    navContacte: 'Contacte',
    phoneVisible: '973 246 625',

    heroTitle: 'Més de 55 anys al servei del professional',
    heroSubtitle: 'Pintures · Vernissos · Maquinària — Lleida',
    badgePaints: '🎨 Pintures',
    badgeVarnishes: '🪵 Vernissos',
    badgeMachinery: '⚙️ Maquinària',
    ctaPrimary: "Contacta'ns",
    ctaSecondary: 'Descobreix els nostres productes',
    statYear: 'Des de 1966',
    statLocation: 'Tota la Província',
    statService: 'Servei Tècnic Propi',

    empresaTitle: 'La nostra empresa',
    empresaSubtitle: 'Més de mig segle d\'experiència en l\'assessorament i distribució tècnica',
    empresaDesc1: 'Els nostres inicis es remunten a l’any 1966 amb un petit magatzem de vernissos i pintures plàstiques, actuant en representació d’INDUSTRIAS OMAR de València. Al llarg de les dècades, hem experimentat un creixement constant fins a consolidar-nos com un dels principals subministradors i assessors tècnics de la província de Lleida.',
    empresaDesc2: 'Les nostres instal·lacions estan completament preparades i equipades per oferir serveis de formació, investigació i desenvolupament de noves tècniques, cobrint amb garanties tots els camps de la decoració professional i del sector industrial de la pintura i el tractament de superfícies.',
    tintometricTitle: '🎨 Sistema Tintomètric i Espectrofotometria',
    tintometricDesc: 'Disposem de tecnologia de darrera generació per a la reproducció immediata de qualsevol color a l’instant. Creem fórmules precises per a pintures plàstiques, revestiments de façanes, esmalts, vernissos, clorocauchos, poliuretans de 2 components, epoxis, laques de poliuretà (tant base solvent com base aigua), metal·litzats, texturats i colors personalitzats a mida.',

    productesTitle: 'Els nostres productes i serveis',
    productesSubtitle: 'Professionals altament qualificats per garantir la màxima qualitat en qualsevol projecte',
    searchPlaceholder: 'Cerca subcategories (ex. Airless, Poliuretans...)',
    allCategories: 'Totes les categories',
    departmentLabel: 'Assessorament especialitzat',

    distDistribuidors: 'Distribució de primeres marques',
    distSub: 'Som distribuïdors oficials per a tota la província de Lleida',
    distIntro: 'Comercial Mateu posa a la vostra disposició un catàleg format exclusivament per marques líders a nivell nacional i internacional. Garantim equips d\'alt rendiment i pintures de màxima durabilitat, avalats pel nostre servei postvenda i assessorament a peu d\'obra o taller.',
    brandOfficial: 'Marca oficial',
    brandCategoryPaint: 'Pintura i Revestiment',
    brandCategoryMch: 'Equips i Maquinària',
    brandCategoryVar: 'Vernissos i Fusta',

    contactTitle: 'On som i contacte',
    contactSubtitle: 'Estem a la vostra disposició. Truqueu, escriviu o apropem-vos a les nostres oficines.',
    contactAddress: 'C/ Jaume d\'Agramunt, 11 — 25005 Lleida (Catalunya)',
    contactPhone: 'Telèfon: +34 973 246 625',
    contactFax: 'Fax: +34 973 044 020',
    contactEmail: 'Email: info@comercialmateu.com',
    formName: 'Nom complet',
    formPhoneEmail: 'Telèfon o Correu electrònic',
    formMessage: 'El vostre missatge o consulta',
    formSend: 'Enviar consulta',
    formSuccess: 'Missatge enviat correctament! Ens posarem en contacte amb vostè el més aviat possible.',
    formSending: 'Enviant...',

    footerSlogan: 'Més de 55 anys de professionalitat, tradició i tecnologia industrial a Lleida.',
    footerLinks: 'Navegació Ràpida',
    footerProducts: 'Categories Principals',
    footerContact: 'Dades de Contacte',
    footerCopyright: '© 2026 Comercial Mateu Lleida SL — Tots els drets reservats. Disseny i tecnologia moderns.'
  },
  es: {
    navInici: 'Inicio',
    navEmpresa: 'Empresa',
    navProductes: 'Productos',
    navDistribucio: 'Distribución',
    navContacte: 'Contacto',
    phoneVisible: '973 246 625',

    heroTitle: 'Más de 55 años al servicio del profesional',
    heroSubtitle: 'Pinturas · Barnices · Maquinaria — Lleida',
    badgePaints: '🎨 Pinturas',
    badgeVarnishes: '🪵 Barnices',
    badgeMachinery: '⚙️ Maquinaria',
    ctaPrimary: 'Contáctanos',
    ctaSecondary: 'Descubre nuestros productos',
    statYear: 'Desde 1966',
    statLocation: 'Toda la Provincia',
    statService: 'Servicio Técnico Propio',

    empresaTitle: 'Nuestra empresa',
    empresaSubtitle: 'Más de medio siglo de experiencia en el asesoramiento y distribución técnica',
    empresaDesc1: 'Nuestros inicios se remontan al año 1966 con un pequeño almacén de barnices y pinturas plásticas, actuando en representación de INDUSTRIAS OMAR de Valencia. A lo largo de las décadas, hemos experimentado un crecimiento constante hasta consolidarnos como uno de los principales suministradores y asesores técnicos de la provincia de Lleida.',
    empresaDesc2: 'Nuestras instalaciones están completamente preparadas y equipadas para ofrecer servicios de formación, investigación y desarrollo de nuevas técnicas, cubriendo con plenas garantías todos los campos de la decoración profesional y del sector industrial de la pintura y el tratamiento de superficies.',
    tintometricTitle: '🎨 Sistema Tintométrico y Espectrofotometría',
    tintometricDesc: 'Disponemos de tecnología de última generación para la reproducción inmediata de cualquier color al instante. Creamos fórmulas precisas para pinturas plásticas, revestimientos de fachadas, esmaltes, barnices, clorocauchos, poliuretanos de 2 componentes, epoxis, lacas de poliuretano (tanto base solvente como base agua), metalizados, texturados y colores personalizados a medida.',

    productesTitle: 'Nuestros productos y servicios',
    productesSubtitle: 'Profesionales altamente cualificados para garantizar la máxima calidad en cualquier proyecto',
    searchPlaceholder: 'Busca subcategorías (ej. Airless, Poliuretanos...)',
    allCategories: 'Todas las categorías',
    departmentLabel: 'Asesoramiento especializado',

    distDistribuidors: 'Distribución de primeras marcas',
    distSub: 'Somos distribuidores oficiales para toda la provincia de Lleida',
    distIntro: 'Comercial Mateu pone a su disposición un catálogo formado exclusivamente por marcas líderes a nivel nacional e internacional. Garantizamos equipos de alto rendimiento y pinturas de máxima durabilidad, respaldados por nuestro servicio posventa y asesoramiento a pie de obra o taller.',
    brandOfficial: 'Marca oficial',
    brandCategoryPaint: 'Pintura y Revestimiento',
    brandCategoryMch: 'Equipos y Maquinaria',
    brandCategoryVar: 'Barnices y Madera',

    contactTitle: 'Dónde estamos y contacto',
    contactSubtitle: 'Estamos a su disposición. Llame, escriba o acérquese a nuestras oficinas.',
    contactAddress: 'C/ Jaume d\'Agramunt, 11 — 25005 Lleida (España)',
    contactPhone: 'Teléfono: +34 973 246 625',
    contactFax: 'Fax: +34 973 044 020',
    contactEmail: 'Email: info@comercialmateu.com',
    formName: 'Nombre completo',
    formPhoneEmail: 'Teléfono o Correo electrónico',
    formMessage: 'Su mensaje o consulta',
    formSend: 'Enviar consulta',
    formSuccess: '¡Mensaje enviado correctamente! Nos pondremos en contacto con usted lo antes posible.',
    formSending: 'Enviando...',

    footerSlogan: 'Más de 55 años de profesionalidad, tradición y tecnología industrial en Lleida.',
    footerLinks: 'Navegación Rápida',
    footerProducts: 'Categorías Principales',
    footerContact: 'Datos de Contacto',
    footerCopyright: '© 2026 Comercial Mateu Lleida SL — Todos los derechos reservados. Diseño y tecnología modernos.'
  }
};

export const installations: InstallationItem[] = [
  {
    id: 'comercial',
    icon: '🏪',
    titleCa: 'Establiment Comercial',
    titleEs: 'Establecimiento Comercial',
    descCa: 'Adquisició directa i assessorament personalitzat de tot tipus de materials per a particulars i professionals.',
    descEs: 'Adquisición directa y asesoramiento personalizado de todo tipo de materiales para particulares y profesionales.'
  },
  {
    id: 'logistic',
    icon: '🏭',
    titleCa: 'Magatzem i Centre Logístic',
    titleEs: 'Almacén y Centro Logístico',
    descCa: 'Gran capacitat d’emmagatzematge amb fons d’estoc constant. Servei d’entrega diària garantida a tota la província.',
    descEs: 'Gran capacidad de almacenamiento con stock permanente. Servicio de entrega diaria garantizada en toda la provincia.'
  },
  {
    id: 'oficines',
    icon: '🗂️',
    titleCa: 'Oficines',
    titleEs: 'Oficinas',
    descCa: 'Gestió administrativa de comandes, facturació i atenció al client àgil i totalment personalitzada.',
    descEs: 'Gestión administrativa de pedidos, facturación y atención al cliente ágil y totalmente personalizada.'
  },
  {
    id: 'laboratori',
    icon: '🔬',
    titleCa: 'Laboratori I+D',
    titleEs: 'Laboratorio I+D',
    descCa: 'Control de qualitat exhaustiu dels productes abans del seu llançament i comercialització al client final.',
    descEs: 'Control de calidad exhaustivo de los productos antes de su lanzamiento y comercialización al cliente final.'
  },
  {
    id: 'formacio',
    icon: '📚',
    titleCa: 'Sala de Formació',
    titleEs: 'Sala de Formación',
    descCa: 'Formació tècnica sobre l’ús dels nous productes i assessorament teoricopràctic per a equips d’aplicació.',
    descEs: 'Formación técnica sobre el uso de los nuevos productos y asesoramiento teórico-práctico para equipos de aplicación.'
  },
  {
    id: 'tecnic',
    icon: '🔧',
    titleCa: 'Servei Tècnic',
    titleEs: 'Servicio Técnico',
    descCa: 'Reparació, manteniment ràpid i posada a punt d’equips industrials de pintura, polvorització i vernissat.',
    descEs: 'Reparación, mantenimiento rápido y puesta a punto de equipos industriales de pintura, pulverización y barnizado.'
  }
];

export const productCategories: ProductCategory[] = [
  {
    id: 'paints',
    icon: '🎨',
    titleCa: 'Pintures',
    titleEs: 'Pinturas',
    subCa: 'Sistemes de recobriment professional per a tot tipus de superfícies',
    subEs: 'Sistemas de recubrimiento profesional para todo tipo de superficies',
    items: [
      'Plàstics',
      'Esmalts al Aigua',
      'Esmalts Sintètics',
      'Esmalts Alifàtics',
      'Imprimacions',
      'Alta Decoració',
      'Revestiments Façanes',
      'Antigoteres',
      'Hidrofugants',
      'Masilles',
      'Decapants'
    ],
    itemsEs: [
      'Plásticos',
      'Esmaltes al Agua',
      'Esmaltes Sintéticos',
      'Esmaltes Alifáticos',
      'Imprimaciones',
      'Alta Decoración',
      'Revestimientos Fachadas',
      'Antigoteras',
      'Hidrofugantes',
      'Masillas',
      'Decapantes'
    ]
  },
  {
    id: 'varnishes',
    icon: '🪵',
    titleCa: 'Vernissos',
    titleEs: 'Barnices',
    subCa: 'Tractaments, tints i protecció per a qualsevol mena de fusta',
    subEs: 'Tratamientos, tintes y protección para cualquier tipo de madera',
    items: [
      'Ecològics',
      'Ignífugs',
      'Base Aigua',
      'Acrílics',
      'Poliuretans',
      'Ultravioleta',
      'Laques',
      'Tints',
      'Pàtines',
      'Glasejadors',
      'Texturitzats'
    ],
    itemsEs: [
      'Ecológicos',
      'Ignífugos',
      'Base Agua',
      'Acrílicos',
      'Poliuretanos',
      'Ultravioleta',
      'Lacas',
      'Tintes',
      'Pátinas',
      'Glaseadores',
      'Texturizados'
    ]
  },
  {
    id: 'machinery',
    icon: '⚙️',
    titleCa: 'Maquinària',
    titleEs: 'Maquinaria',
    subCa: 'Equips industrials de pulverització i eina professional',
    subEs: 'Equipos industriales de pulverización y herramienta profesional',
    items: [
      'Equips de Pintura',
      'Eines Portàtils',
      'Compressors',
      'Pistoles',
      'Airless',
      'Airmix',
      'Gabines de Pintura',
      'Murs Secs',
      'Pulmons',
      'Reparació'
    ],
    itemsEs: [
      'Equipos de Pintura',
      'Herramientas Portátiles',
      'Compresores',
      'Pistolas',
      'Airless',
      'Airmix',
      'Cabinas de Pintura',
      'Muros Secos',
      'Pulmones',
      'Reparación'
    ]
  },
  {
    id: 'decor',
    icon: '🎭',
    titleCa: 'Decoració',
    titleEs: 'Decoración',
    subCa: 'Elements ornamentals, paper pintat i revestiment estètic',
    subEs: 'Elementos ornamentales, papel pintado y revestimiento estético',
    items: [
      'Pedra Natural',
      'Papers Pintats',
      'Vinils i Stickers',
      'Plaques Decoratives',
      'Cornises i Rosetones',
      'Bustos i Columnes',
      'Bigues i Llindes',
      'Decoració Àrab',
      'Estucs i Marmolitzats',
      'Òxids i Veladores'
    ],
    itemsEs: [
      'Piedra Natural',
      'Papeles Pintados',
      'Vinilos y Stickers',
      'Placas Decorativas',
      'Cornisas y Rosetones',
      'Bustos y Columnas',
      'Vigas y Dinteles',
      'Decoración Árabe',
      'Estucos y Marmolizados',
      'Óxidos y Veladuras'
    ]
  },
  {
    id: 'tintometry',
    icon: '🔵',
    titleCa: 'Tintometria',
    titleEs: 'Tintometría',
    subCa: 'Formulació exacta de colors instantanis en qualsevol producte',
    subEs: 'Formulación exacta de colores instantáneos en cualquier producto',
    items: [
      'Pintures Plàstiques',
      'Esmalts',
      'Imprimacions',
      'Alta Decoració',
      'Poliuretans Terres',
      'Laques Poliuretà',
      'Laques al Aigua',
      'Epoxis',
      'Metal·litzats'
    ],
    itemsEs: [
      'Pinturas Plásticas',
      'Esmaltes',
      'Imprimaciones',
      'Alta Decoración',
      'Poliuretanos Suelos',
      'Lacas Poliuretano',
      'Lacas al Agua',
      'Epoxis',
      'Metalizados'
    ]
  },
  {
    id: 'technical',
    icon: '👨‍🏫',
    titleCa: 'Departament Tècnic',
    titleEs: 'Departamento Técnico',
    subCa: 'Assessorament comercial, cursos pràctics i demostracions',
    subEs: 'Asesoramiento comercial, cursos prácticos y demostraciones',
    items: [
      'Iniciació',
      'Formació',
      'Assessorament Tècnic',
      'Cursos',
      'Projectes',
      'Disseny',
      'Demostracions',
      'Aplicacions',
      'Reparació'
    ],
    itemsEs: [
      'Iniciación',
      'Formación',
      'Asesoramiento Técnico',
      'Cursos',
      'Proyectos',
      'Diseño',
      'Demostraciones',
      'Aplicaciones',
      'Reparación'
    ]
  }
];

export const brands = [
  { name: 'Industrias Omar', sector: 'varnishes', tagline: 'Sistemes de vernissos i tractaments de fusta de qualitat.' },
  { name: 'Sata', sector: 'machinery', tagline: 'Líder en pistoles de pintura aerogràfica de precisió.' },
  { name: 'Sagola', sector: 'machinery', tagline: 'Sistemes d\'alta tecnologia per a polvorització i acabats.' },
  { name: 'Kremlin Rexson', sector: 'machinery', tagline: 'Equips Airless i Airmix per a aplicació industrial.' },
  { name: 'Larix', sector: 'varnishes', tagline: 'Vernissos i laques professionals d\'alta resistència.' },
  { name: 'Pintures Hempel', sector: 'paints', tagline: 'Recobriments protectors industrials i marins d\'alt nivell.' },
  { name: 'Macy Pinturas', sector: 'paints', tagline: 'Especialista en revestiments de façanes i decoració d\'interiors.' },
  { name: 'Festool', sector: 'machinery', tagline: 'Eines elèctriques i pneumàtiques per a fusters i pintors.' }
];
