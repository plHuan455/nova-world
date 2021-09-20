import { ProcessesData, ProcessesListParams } from './type';

import axiosInstance from 'services/common/instance';

const getProcessesService = async (
  params?: ProcessesListParams,
): Promise<ProcessesData[]> => {
  const res = await axiosInstance.get('processes', { params });
  return res.data.data;
};

export default getProcessesService;
