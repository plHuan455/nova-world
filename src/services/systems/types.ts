export type HeaderSystems = {
  logo?: string;
}

export type FooterSystems = {
  logo?: string;
  btnText?: string;
  btnLink?: string;
  copyright?: string;
}

export type SystemsData = {
  seo: SEOData;
  header: HeaderSystems;
  footer: FooterSystems;
  googleAnalytics?: string;
  googleMapKey?: string;
  googleTagManager?: string;
}
