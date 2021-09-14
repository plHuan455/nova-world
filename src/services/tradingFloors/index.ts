import TradingFloorData from './type';

import axiosInstance from 'services/common/instance';

const getTradingFloorsService = async (): Promise<APIPaginationResponse<TradingFloorData[]>> => {
  const res = await axiosInstance.get('trading-floors');
  return res.data;
};

export default getTradingFloorsService;
