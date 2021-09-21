type MetaData = {
  totalPages: number;
  limit: number;
  total: number;
  page: number;
}

type ErrorCodeResponse = {
  code: string;
  title: string;
}

type SEOData = {
  title: string;
  description: string;
  keywords: string;
}

type LinkData = {
  self: string;
  first: string;
  prev: string;
  next: string;
  last: string;
}

type Meta = {
  totalPages: number;
  limit: number;
  total: number;
  page: number;
};

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

type APIPaginationResponse<T> = {
  data: T;
  links: LinkData;
  meta: Meta;
  message: string;
}

type APIResponse<T> = {
  data: T;
  message: string;
};

type LocalesItem = {
  icon?: string;
  message?: string;
  active?: boolean;
  default?: boolean;
}

type LocalesResponse = {
  vi: LocalesItem;
  en: LocalesItem;
  kr: LocalesItem;
  jp: LocalesItem;
  cn: LocalesItem;
}

type LanguageType = 'VN'|'EN'|'CN'|'JP'|'KR';

type Translation = {
  locale: string;
  title: string;
  slug: string;
  description: string;
}

type BlockComponents<T> = {
  code: string;
  blocks: T;
}

type BannerData = {
  imageDesktop: string;
  imageMobile: string;
  imageTablet: string;
  link: string;
  subTitle: string;
  title: string;
}

type BannersData = {
  data: BannerData;
  type: string;
}
