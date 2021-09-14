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
  if (params.utmSource) {
    formData.append('utm_data[utm_source]', params.utmSource);
  }
  if (params.utmMedium) {
    formData.append('utm_data[utm_medium]', params.utmMedium);
  }
  if (params.utmTerm) {
    formData.append('utm_data[utm_term]', params.utmTerm);
  }
  if (params.utmCampaign) {
    formData.append('utm_data[utm_campaign]', params.utmCampaign);
  }
  if (params.utmContent) {
    formData.append('utm_data[utm_content]', params.utmContent);
  }

  await axiosInstance.post('contacts/stor', formData);
};

export const placeholder = null;
