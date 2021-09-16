import { CreateContactParams } from './type';

import axiosInstance from 'services/common/instance';

export const createContactStoreService = async (
  params: CreateContactParams,
): Promise<void> => {
  const formData = new FormData();
  formData.append('name', params.name);
  formData.append('email', params.email);
  formData.append('phone', params.phone);
  formData.append('content', params.content);
  formData.append('grecaptcha_token', params.grecaptchaToken);
  if (params.utm_source) {
    formData.append('utm_data[utm_source]', params.utm_source);
  }
  if (params.utm_medium) {
    formData.append('utm_data[utm_medium]', params.utm_medium);
  }
  if (params.utm_term) {
    formData.append('utm_data[utm_term]', params.utm_term);
  }
  if (params.utm_campaign) {
    formData.append('utm_data[utm_campaign]', params.utm_campaign);
  }
  if (params.utm_content) {
    formData.append('utm_data[utm_content]', params.utm_content);
  }

  await axiosInstance.post('contacts/store', formData);
};

export const placeholder = null;
