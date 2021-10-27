import {
  SearchItem, SearchParams, SuggestItem, SuggestParams,
} from './type';

import axiosInstance from 'services/common/instance';
import { formatParams } from 'utils/functions';

export const getSuggestService = async (
  params?: SuggestParams,
): Promise<SuggestItem[]> => {
  const res = await axiosInstance.get('suggest-keywords/get-list', { params });
  return res.data.data;
};

export const getSearchService = async (
  _params?: SearchParams,
): Promise<APIPaginationResponse<SearchItem[]>> => {
  const params = formatParams(_params);
  const res = await axiosInstance.get('search-all', {
    baseURL: process.env.REACT_APP_API_SYSTEM_URL,
    params,
  });
  return res.data;
};
