export type EventsParams = {
  page?: number;
  limit?: number;
  keyword?: string;
}

export type EventsItem = {
  id: number;
  displayOrder: number;
  status: number;
  createdAt: string;
  updatedAt: string;
  locale: string;
  name: string;
  description: string;
  thumbnail: string;
  popup: {
    image: string;
  }[];
  translation: {
    id: number;
    eventId: number;
    locale: string;
    name: string;
    description: string;
    popup: {
      image: string;
    }[];
    thumbnail: string;
  }
}
