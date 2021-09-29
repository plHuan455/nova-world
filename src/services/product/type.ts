/* eslint-disable camelcase */
export type ProductListParams = {
  page?: number;
  limit?: number;
  keyword?: string;
  is_featured?: string;
}

export type ProductData = {
  id: number;
  displayOrder: number;
  status: number;
  isFeatured: number;
  createdAt: string;
  updatedAt: string;
  locale: string;
  title?: string;
  subTitle?: string;
  thumbnail?: string;
  link?: string;
  linkTarget?: string;
  translation: {
    id: number;
    processId: number;
    locale: string;
    title: string;
    subTitle: string;
    thumbnail: string;
    link: string;
    linkTarget: string;
  };
}

export type ProductListServices = {
  data: ProductData[];
  meta: MetaData;
}
