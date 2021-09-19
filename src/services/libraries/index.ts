import {
  LibraryCategoriesListData,
  LibraryCategoriesListParams,
  LibraryListItemParams,
  LibraryListRes,
} from './type';

import axiosInstance from 'services/common/instance';

const getLibraryCategoriesListService = async (
  params?: LibraryCategoriesListParams,
): Promise<LibraryCategoriesListData[]> => {
  const res = await axiosInstance.get('library-categories/get-list', { params });
  return res.data.data;
};

export const getLibraryList = async (
  params?: LibraryListItemParams,
): Promise<LibraryListRes> => {
  const res = await axiosInstance.get('libraries', { params });
  return res.data;
};

export default getLibraryCategoriesListService;
