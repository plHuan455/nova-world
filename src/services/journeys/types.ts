export type JourneysItem = {
  id: number;
  displayOrder: number;
  status: number;
  createdAt: string;
  updatedAt: string;
  locale: string;
  title: string;
  description: string;
  thumbnail: string;
  translation: Translation;
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
