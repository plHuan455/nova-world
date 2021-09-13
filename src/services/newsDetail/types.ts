/* eslint-disable camelcase */
export interface NewsData {
  id: number,
  uuid: string,
  displayOrder: number,
  visitedCount: number,
  status: number,
  isPopular: number,
  thumbnail: string,
  publishedAt: string,
  createdAt: string,
  updatedAt: string,
  locale: string,
  slug: string,
  title: string,
  description: string,
  content: string | null,
  tags: [],
  translations: TranslationData[];
}
interface TranslationData {
  id: number;
  newsId: number,
  locale: string,
  slug: string,
  title: string,
  description: string,
  content: null,
  tags: []
}
export interface RelatedNewsData {
  id: number,
  uuid: string,
  displayOrder: number,
  visitedCount: number,
  status: number,
  isPopular: number,
  thumbnail: string,
  publishedAt: string,
  createdAt: string,
  updatedAt: string,
  locale: string,
  slug: string,
  title: string,
  description: string,
  content: string | null,
  tags: [],
}
export interface NewsDetailData {
  newsData: NewsData,
  relatedNews: RelatedNewsData[],
  seoData: SEOData,
  breadcrumbs: BreadcrumbsData[],
}
