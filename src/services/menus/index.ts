import axiosInstance from 'services/common/instance';
import { MenuItemData, StaticSlug } from 'services/menus/types';

export const getMenusService = async (code: string): Promise<MenuItemData[]> => {
  const response = await axiosInstance.get(`menus/${code}`);
  return response.data.data;
};

export const getStaticSlugService = async (): Promise<StaticSlug[]> => {
  const response = await axiosInstance.get('pages/static/slug');
  return response.data.data;
};
