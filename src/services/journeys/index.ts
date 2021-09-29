import { DivergencesItem, JourneysItem, JourneysParams } from './types';

import axiosInstance from 'services/common/instance';

export const getJourneysService = async (
  params?: JourneysParams,
): Promise<APIPaginationResponse<JourneysItem[]>> => {
  const res = await axiosInstance.get('journeys', { params });
  return res.data;
};

export const getJourneyDetailService = async (
  slug?: string,
): Promise<JourneysItem> => {
  const res = await axiosInstance.get(`journeys/detail/${slug}`);
  return res.data.data;
};

export const getJourneyDivergencesService = async (
  id: number,
): Promise<DivergencesItem[]> => {
  const res = await axiosInstance.get(`journey-divergences/journey/${id}`);
  return res.data.data;
};
