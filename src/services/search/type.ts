export type SiteName = 'novaworld' | 'novamorito' | 'novatropicana' | 'novawonderland' | 'novahabana';

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

export type SearchItem = {
  siteName: SiteName;
  moduleName: string;
  id: string;
  thumbnail: string;
  slug: string;
  locale: string;
  title: string;
  description: string;
}

export type SearchParams = {
  limit?: number;
  keyword?: string | null;
  page?: number;
  siteName?: string;
  moduleName?: string;
  locale?: string;
}
