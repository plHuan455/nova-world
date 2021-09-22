import axiosInstance from 'services/common/instance';

export const getStaticHomeService = async (): Promise<BasePageData<any>> => {
  const response = await axiosInstance.get('pages/static/home-page');
  return response.data.data;
};

export const getPageService = async (slug: string): Promise<BasePageData<any>> => {
  const response = await axiosInstance.get(`pages/${slug}`);
  return response.data.data;
};
