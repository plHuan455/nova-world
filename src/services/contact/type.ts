/* eslint-disable camelcase */
export type UTMParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_term?: string;
  utm_campaign?: string;
  utm_content?: string;
}

export type CreateContactParams = {
  name: string;
  email: string;
  phone: string;
  content: string;
  grecaptchaToken: string;
} & UTMParams;
