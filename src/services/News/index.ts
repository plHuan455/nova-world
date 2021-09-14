import { CategoriesData, NewsData, ParamsType } from './type';

import axiosInstance from 'services/common/instance';

export const getNewsListService = async (): Promise<
  APIPaginationResponse<NewsData[]>
> => {
  const res = await axiosInstance('news');
  return res.data;
};

export const getNewsCategoriesService = async (
  params?: ParamsType,
): Promise<APIResponse<CategoriesData[]>> => {
  const res = await axiosInstance('news-categories/get-list', { params });
  return res.data;
};

export const getNewsListByCateService = async (
  slug: string,
  params?: ParamsType,
): Promise<APIPaginationResponse<NewsData[]>> => {
  const res = await axiosInstance(`news/list-by-category/${slug}`, { params });
  return res.data;
};
