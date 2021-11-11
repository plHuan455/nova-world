import axiosInstance from 'services/common/instance';
import { MenuItemData } from 'services/menus/types';

/* eslint-disable */
export const getMenusService = async (code: string): Promise<MenuItemData[]> => {
  const response = await axiosInstance.get(`menus/${code}`);
  return response.data.data;
};
