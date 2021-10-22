import { SystemsData, BaseSystemData } from './types';

import axiosInstance from 'services/common/instance';

const getSystemsService = async (): Promise<APIResponse<SystemsData>> => {
  const res = await axiosInstance.get('systems/general');
  return res.data;
};

export const getBaseSystemService = async (): Promise<BaseSystemData> => {
  const response = await axiosInstance.get('systems/general', { baseURL: process.env.REACT_APP_API_SYSTEM_URL });
  return response.data.data;
};

export default getSystemsService;
