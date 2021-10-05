import axiosInstance from 'services/common/instance';

const previewDataService = async <T, >(
  token?: string,
): Promise<T> => {
  const res = await axiosInstance.get(`preview/${token}`, {
    baseURL: process.env.REACT_APP_API_SYSTEM_URL,
  });
  return res.data.data;
};

export default previewDataService;
