export type ProcessesListParams = {
  page?: number;
  limit?: number;
  keyword?: string;
}

export interface ProcessesData {
  id: number;
  displayOrder: number;
  publishedAt: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  locale: string;
  title: string;
  media: string;
  description: string;
  type: string;
  translation: {
    id: number;
    processId: number;
    locale: string;
    title: string;
    media: string;
    type: string;
    mediaThumb: string;
    description: string;
  };
}
