import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { CONSTANT_LANG } from 'constants/language';

const listLanguages = Object.values(CONSTANT_LANG);

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['translation'],
    fallbackLng: 'vi',
    debug: false,
    defaultNS: 'translation',
    keySeparator: '.',
    whitelist: listLanguages,
    interpolation: {
      escapeValue: false,
    },
    // issue i18n.language undefined
    // https://github.com/isaachinman/next-i18next/issues/374
    initImmediate: false,
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
    },
    backend: {
      customHeaders: {
        'Content-Type': 'application/json',
      },
      loadPath:
        `${process.env.REACT_APP_API_BASE_URL}spa-translations?locale={{lng}}`,
    },
  });

export default i18n;
