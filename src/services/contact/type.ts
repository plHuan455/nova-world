export type CreateContactParams = {
  name: string,
  email: string,
  phone: string,
  content: string,
  grecaptchaToken: string,
  utmSource?: string | null;
  utmMedium?: string | null;
  utmTerm?: string | null;
  utmCampaign?: string | null;
  utmContent?: string | null;
}
