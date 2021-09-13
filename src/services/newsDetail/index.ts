import { NewsDetailData } from './types';

import axiosInstance from 'services/common/instance';

const getNewsDetail = async (
  params?: string,
): Promise<NewsDetailData> => {
  const res = await axiosInstance.get(`news/${params}`);
  return res.data.data;
};
export default getNewsDetail;
