export const CONSTANT_LANG: Record<LanguageType, keyof LocalesResponse> = {
  VN: 'vi',
  EN: 'en',
  CN: 'cn',
  JP: 'jp',
  KR: 'kr',
};

export const LIST_LANGUAGE:Array<{label:LanguageType, value:keyof LocalesResponse}> = [
  {
    label: 'VN',
    value: 'vi',
  },
  {
    label: 'EN',
    value: 'en',
  },
  {
    label: 'CN',
    value: 'cn',
  },
  {
    label: 'JP',
    value: 'jp',
  },
  {
    label: 'KR',
    value: 'kr',
  },
];
