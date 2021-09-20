import { JourneysItem, JourneysParams } from './types';

import axiosInstance from 'services/common/instance';

export const getJourneysService = async (
  params?: JourneysParams,
): Promise<APIPaginationResponse<JourneysItem[]>> => {
  const res = await axiosInstance.get('journeys', { params });
  return res.data;
};

export const remove = '';
