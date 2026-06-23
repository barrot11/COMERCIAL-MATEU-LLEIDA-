export type Language = 'ca' | 'es';

export interface TranslationDict {
  // Navigation
  navInici: string;
  navEmpresa: string;
  navProductes: string;
  navDistribucio: string;
  navContacte: string;
  phoneVisible: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  badgePaints: string;
  badgeVarnishes: string;
  badgeMachinery: string;
  ctaPrimary: string;
  ctaSecondary: string;
  statYear: string;
  statLocation: string;
  statService: string;

  // Empresa Section
  empresaTitle: string;
  empresaSubtitle: string;
  empresaDesc1: string;
  empresaDesc2: string;
  tintometricTitle: string;
  tintometricDesc: string;

  // Productes Section
  productesTitle: string;
  productesSubtitle: string;
  searchPlaceholder: string;
  allCategories: string;
  departmentLabel: string;

  // Distribucio Section
  distDistribuidors: string;
  distSub: string;
  distIntro: string;
  brandOfficial: string;
  brandCategoryPaint: string;
  brandCategoryMch: string;
  brandCategoryVar: string;

  // Contacte Section
  contactTitle: string;
  contactSubtitle: string;
  contactAddress: string;
  contactPhone: string;
  contactFax: string;
  contactEmail: string;
  formName: string;
  formPhoneEmail: string;
  formMessage: string;
  formSend: string;
  formSuccess: string;
  formSending: string;

  // Footer
  footerSlogan: string;
  footerLinks: string;
  footerProducts: string;
  footerContact: string;
  footerCopyright: string;
}

export interface InstallationItem {
  id: string;
  icon: string;
  titleCa: string;
  titleEs: string;
  descCa: string;
  descEs: string;
}

export interface ProductItem {
  category: 'paints' | 'varnishes' | 'machinery' | 'decor' | 'tintometry' | 'technical';
  nameCa: string;
  nameEs: string;
}

export interface ProductCategory {
  id: 'paints' | 'varnishes' | 'machinery' | 'decor' | 'tintometry' | 'technical';
  icon: string;
  titleCa: string;
  titleEs: string;
  subCa: string;
  subEs: string;
  items: string[]; // List of subcategories
  itemsEs: string[];
}
