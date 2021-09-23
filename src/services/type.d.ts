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

type PageData = {
  id: number;
  templateCode: string;
  code: string;
  active: boolean;
  isHome: boolean;
  groupCode?: any;
  name: string;
  status: number;
  parentId?: any;
  bannerId: number;
  createdAt: Date;
  updatedAt: Date;
  locale: string;
  title: string;
  slug: string;
  description?: any;
  translations: Translation[];
}

type BasePageData<T> = {
  pageData: PageData;
  blocks: BlockComponents<T>[];
  banners: BannersData[];
  seoData: SEOData;
  breadcrumbs: BreadcrumbsData[];
}

type LibraryBlock = {
  title: string;
}

type ContactBlock = {
  title: string;
  col1: {
    title: string;
  }
  col2: {
    contentPlaceholder: string;
    emailPlaceholder: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    title: string;
  }
}

type NewsBlock = {
  title: string;
  btnLabel: string;
}

type SearchBlock = {
  title: string;
};

type JourneysBlock = {
  title: string;
  description: string;
}

type NotFoundBlock = {
  btnLabel: string;
  description: string;
  subTitle: string;
  title: string;
}

// Region Page Type
type LibraryPage = LibraryBlock;

type ContactPage = ContactBlock;

type NewsPage = NewsBlock;

type SearchPage = SearchBlock;

type JourneysPage = JourneysBlock;

type NotFoundPage = NotFoundBlock;
