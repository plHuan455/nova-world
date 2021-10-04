import {
  SearchItem, SearchParams, SuggestItem, SuggestParams,
} from './type';

import axiosInstance from 'services/common/instance';

export const getSuggestService = async (
  params?: SuggestParams,
): Promise<SuggestItem[]> => {
  const res = await axiosInstance.get('suggest-keywords/get-list', { params });
  return res.data.data;
};

export const getSearchService = async (
  params?: SearchParams,
): Promise<APIPaginationResponse<SearchItem[]>> => {
  const res = await axiosInstance.get('systems/search-all', { params });
  return res.data;
};
