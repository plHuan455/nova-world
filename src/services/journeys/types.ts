export type Images = {
  image: string;
  title: string;
  subTitle: string;
}
export type JourneysItem = {
  id: number;
  displayOrder: number;
  status: number;
  createdAt: string;
  updatedAt: string;
  locale: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  translation: Translation;
  slug?: string;
  buttonLable?: string;
  subtitle?: string;
  thumnailHome?: string;
  images?: Images[];
  banner?: string;
}

export type Translation = {
  id: number;
  journeyId: number;
  locale: string;
  title: string;
  description: string;
  thumbnail: string;
}

export type JourneysParams = {
  page?: number;
  limit?: number;
  keyword?: number;
}

export type DivergencesItem = {
  id: number;
  displayOrder: number;
  journeyId: number;
  status: number;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  slug?: string;
  name?: string;
  title: string;
  description?: string;
  content?: string;
  translations: {
    id: number;
    journeyDivergenceId: number;
    locale: string;
    slug: string;
    name: string;
    title: string;
    description: string;
    content: string;
  }
}
