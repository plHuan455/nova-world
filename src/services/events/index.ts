import { EventsItem, EventsParams } from './types';

import axiosInstance from 'services/common/instance';

export const getEventsService = async (
  params?: EventsParams,
): Promise<APIPaginationResponse<EventsItem[]>> => {
  const res = await axiosInstance.get('events', { params });
  return res.data;
};

export const placeholder = null;
