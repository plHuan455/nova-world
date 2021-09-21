import axiosInstance from 'services/common/instance';

const getSystemsLocales = async (): Promise<LocalesResponse> => {
  const res = await axiosInstance.get('systems/locales');
  return res.data.data;
};

export default getSystemsLocales;
