/* eslint-disable camelcase */
export interface Translations {
  id: number;
  libraryCategoryId: number;
  locale: string;
  slug: string;
  name: string;
  description: null;
}

export interface LibraryCategoriesListData {
  id: number;
  displayOrder: number;
  active: number;
  parentId: number | null;
  status: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  slug: string;
  name: string;
  description: string | null;
  translations: Translations[];
}

export interface LibraryCategoriesListParams {
  limit: number;
  keyword: string;
}

export interface LibraryListItemParams {
  is_home?: number;
  category_ids?: string;
  page?: number;
  limit?: number;
  keyword?: string;
}

export interface LibraryListItemData {
  id: number;
  displayOrder: number;
  type: number;
  status: number;
  isHome: number;
  createdAt: string;
  updatedAt: string;
  locale: string;
  title: string;
  media: string;
  translation?: TranslationData;
  categories: CategoriesData[];
}

interface TranslationData {
  id: number;
  libraryId: number;
  locale: string;
  media?: string;
  title: string;
  type: string;
  mediaThumb?: string;
}

export interface CategoriesData {
  id: number;
  displayOrder: number;
  active: number;
  parentId: number | null;
  status: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  slug: string;
  name: string;
  description: null;
  translations: Translations[];
  pivot: {
    libraryI: number;
    libraryCategoryI: number;
  };
}

export interface LibraryListRes {
  data: LibraryListItemData[];
  meta: MetaData;
}
