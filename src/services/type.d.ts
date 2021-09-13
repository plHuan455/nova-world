type ErrorCodeResponse = {
  code: string;
  title: string;
}

type SEOData = {
  title: string;
  description: string;
  keywords: string;
}

type ConsultancySystem = {
  title?: string;
  banner?: string;
  namePlaceholder?: string;
  phonePlaceholder?: string;
  emailPlaceholder?: string;
  contentPlaceholder?: string;
  btnText?: string;
}

type BreadcrumbsData = {
  type: string;
  text: string;
  slug: string;
}
