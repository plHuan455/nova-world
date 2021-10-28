export type HeaderSystems = {
  logo?: string;
  logoTransparent?: string;
}

export type FooterSystems = {
  logo?: string;
  btnText?: string;
  btnLink?: string;
  copyright?: string;
}

export type TranslateData = {
  vi: string;
  en: string;
  kr: string;
  jp: string;
  cn: string;
}

export type SystemsData = {
  seo?: SEOData;
  header: HeaderSystems;
  footer: FooterSystems;
  googleAnalytics?: string;
  googleMapKey?: string;
  googleTagManager?: string;
  videoAnimation: string;
  openGraphImage?: string;
  footScripts?: string;
  consultancy: ConsultancySystem;
}

export type BaseSystemData = {
  seo?: SEOData;
  googleRecaptchaSiteKey: string;
  routeMappings: {
    novahabana: {
      news: TranslateData;
      ultility: TranslateData;
    },
    novaworld: {
      news: TranslateData;
      product?: TranslateData;
      ultility: TranslateData;
    },
    novatropicana: {
      news: TranslateData;
      ultility: TranslateData;
    },
    novamorito: {
      news: TranslateData;
      ultility: TranslateData;
    },
    novawonderland: {
      news: TranslateData;
      ultility: TranslateData;
    }
  },
}
