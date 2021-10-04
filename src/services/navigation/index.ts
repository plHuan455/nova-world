import axiosInstance from 'services/common/instance';

export const getStaticHomeService = async <T, >(): Promise<BasePageData<T>> => {
  const response = await axiosInstance.get('pages/static/home-page');
  return response.data.data;
};

export const getPageService = async <T, >(slug: string): Promise<BasePageData<T>> => {
  const response = await axiosInstance.get(`pages/${slug}`);
  return response.data.data;
};
