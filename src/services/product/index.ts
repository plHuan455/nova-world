import { ProductListParams, ProductListServices } from './type';

import axiosInstance from 'services/common/instance';

const getProductService = async (
  params?: ProductListParams,
): Promise<ProductListServices> => {
  const res = await axiosInstance.get('products', { params });
  return res.data;
};

export default getProductService;
