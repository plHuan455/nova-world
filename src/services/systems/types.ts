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

export type LanguageRouteMapping = {
  vi: string;
  en: string;
  kr: string;
  jp: string;
  cn: string;
}

type SlugLocale = {
  slug: string;
}

export type SiteStaticPage = {
  templateCode: string;
  locales: {
    cn: SlugLocale;
    en: SlugLocale;
    jp: SlugLocale;
    kr: SlugLocale;
    vi: SlugLocale;
  };
};

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
      news: LanguageRouteMapping;
      ultility: LanguageRouteMapping;
    },
    novaworld: {
      news: LanguageRouteMapping;
      product?: LanguageRouteMapping;
      ultility: LanguageRouteMapping;
    },
    novatropicana: {
      news: LanguageRouteMapping;
      ultility: LanguageRouteMapping;
    },
    novamorito: {
      news: LanguageRouteMapping;
      ultility: LanguageRouteMapping;
    },
    novawonderland: {
      news: LanguageRouteMapping;
      ultility: LanguageRouteMapping;
    }
  },
  staticPages: {
    novahabana: SiteStaticPage[];
    novamorito: SiteStaticPage[];
    novatropicana: SiteStaticPage[];
    novawonderland: SiteStaticPage[];
    novaworld: SiteStaticPage[];
  }
}
