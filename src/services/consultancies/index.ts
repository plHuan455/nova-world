import { CreateConsultancyParams } from './type';

import axiosInstance from 'services/common/instance';

export const createConsultancyService = async (
  params: CreateConsultancyParams,
): Promise<void> => {
  const formData = new FormData();
  formData.append('name', params.name);
  formData.append('email', params.email);
  formData.append('phone', params.phone);
  formData.append('content', params.content);
  formData.append('grecaptcha_token', params.grecaptchaToken);

  await axiosInstance.post('consultancies/store', formData);
};

export const placeholder = null;
