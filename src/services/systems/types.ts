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
