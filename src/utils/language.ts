import { MenuItem, StaticSlug } from 'services/menus/types';

export const checkActiveLang = (
  activeLang: keyof LocalesResponse,
  listActive?: LocalesResponse,
): boolean => {
  if (listActive) {
    return !!listActive[activeLang].active;
  }
  return false;
};

export function readObjProps<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

export const findLanguageDefault = (
  locales?: LocalesResponse,
) => {
  if (locales) {
    const languageFind = (Object.keys(locales) as Array<keyof LocalesResponse>).find(
      (ele) => locales[ele].active && locales[ele].default,
    );
    return languageFind || 'vi';
  }
  return 'vi';
};

export const getMessageLanguage = (
  lang:keyof LocalesResponse,
  locales?: LocalesResponse,
) => {
  if (locales && locales[lang]) {
    return locales[lang].message || 'Error';
  }
  return 'Error';
};

export function getHomeLangURL(lang?: string) {
  if (lang && lang !== 'vi') return `/${lang}`;
  return '/';
}

export function getActiveLanguages(locales?: LocalesResponse) {
  if (locales) {
    return (Object.keys(locales) as Array<keyof LocalesResponse>).reduce(
      (prev:Array<keyof LocalesResponse>, curr:keyof LocalesResponse) => (
        locales[curr].active ? [...prev, curr] : [...prev]
      ), [],
    );
  }
  return [];
}

export function getLangURL(lang?: string) {
  if (lang && lang !== 'vi') return `/${lang}`;
  return '';
}

export function convertHomeRoute(locales?: LocalesResponse) {
  return getActiveLanguages(locales).map((ele) => getHomeLangURL(ele));
}

export function convertRoute(locales?: LocalesResponse, slug?: string) {
  return getActiveLanguages(locales).map((ele) => `${getLangURL(ele)}${slug || ''}`);
}

export const getSlugByTemplateCode = (
  templateCode: string,
  staticSlug?: StaticSlug[],
): string => {
  if (staticSlug) {
    const res = staticSlug.find((ele) => ele.templateCode === templateCode);
    if (res) return res.slug;
    return '';
  }
  return '';
};

export const getPrefixCardDetail = (
  templateCode: string,
  staticSlug?: StaticSlug[],
  lang?: string,
):string => {
  const prefixLanguage = getLangURL(lang);
  const prefixTemplate = getSlugByTemplateCode(templateCode, staticSlug);
  return `${prefixLanguage}/${prefixTemplate}/`;
};

export const getSlugItemMenuHeader = (item:MenuItem, language:string) => {
  if (item.reference?.slug === '/' && language === 'vi') {
    return '/';
  }
  if (item.reference?.slug === '/' && language !== 'vi') {
    return getLangURL(language);
  }
  return `${getLangURL(language)}/${item.reference?.slug}`;
};
