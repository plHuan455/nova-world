export interface NewsData {
  id: number;
  uuid: string;
  displayOrder: number;
  visitedCount: number;
  status: number;
  isPopular: number;
  thumbnail: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  description: string;
  slug: string;
  title: string;
  content: string;
  tags: string[];
}

export interface CategoriesData {
    id: number;
    displayOrder: number;
    active: boolean;
    status: number;
    parentId?: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    slug: string;
    name: string;
    description: string;
    newsList: NewsData[];
}

export type ParamsType = {
  limit?: number;
  keyword?: string;
  page?: number;
  locale?: string;
  exceptIds?: string;
}
