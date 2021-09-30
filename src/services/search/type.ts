export type SuggestItem = {
  id: number;
  displayOrder: number;
  status: number;
  createdAt: string;
  updatedAt: string;
  locale: string;
  slug?: string;
  name: string;
  translations: {
    id: number;
    suggestKeywordId: number;
    locale: string;
    name: string;
  }[];
}

export type SuggestParams = {
  limit?: number;
  keyword?: string;
}

export type SearchItem = {
  type: string;
  locale: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  link?: string;
  linkTarget?: string;
  publishedAt: string;
  displayOrder: number;
  id: number;
  slug?: string;
  status: number;
}

export type SearchParams = {
  limit?: number;
  keyword?: string;
  page?: number;
}
