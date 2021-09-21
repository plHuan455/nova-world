export type PageData = {
  id: number;
  templateCode: string;
  code: string;
  active: boolean;
  isHome: boolean;
  groupCode?: number;
  name: string;
  parentId?: number;
  bannerId?: number;
  createdAt: string;
  updatedAt: string;
  locale: string;
  title: string;
  slug: string;
  description?: string;
  translations: Translation[];
}

export type BreadcrumbsData = {
  type: string;
  text: string;
  slug: string;
}

export type BasePageData<T> = {
  pageData: PageData;
  blocks: BlockComponents<T>[];
  banners: BannersData[];
  seoData: SEOData;
  breadcrumbs: BreadcrumbsData[];
}
