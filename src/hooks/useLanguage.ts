import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import i18n from 'i18n';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { openNotify } from 'store/notify';
import {
  checkActiveLang,
  findLanguageDefault,
  getLangURL,
} from 'utils/language';

const useLanguage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const {
    locales: {
      listLocales,
      pageTranslation: { translation, isDetail },
    },
  } = useAppSelector((state) => state);

  const handleChangeLanguage = (lang: keyof LocalesResponse) => {
    // Page chi tiết của tin-tuc , hành trình trải nghiệm
    if (checkActiveLang(lang, listLocales) && isDetail) {
      window.location.href = window.location.origin + getLangURL(lang);
      return;
    }
    // Page home , page child
    if (translation && checkActiveLang(lang, listLocales)) {
      const transData = translation.find(
        (ele) => ele.locale === lang,
      );
      const slugByTrans = transData?.slug !== '/' ? `/${transData?.slug}` : '';
      const pathName = getLangURL(lang) + slugByTrans;
      window.location.href = window.location.origin + pathName;
      return;
    }
    const messageError = listLocales ? listLocales[lang]?.message : 'Error';
    dispatch(openNotify({ type: 'warning', message: messageError }));
  };

  useEffect(() => {
    if (listLocales
      && !checkActiveLang(i18n.language as keyof LocalesResponse, listLocales)
    ) {
      i18n.changeLanguage(findLanguageDefault(listLocales), () => {
        history.push(`${getLangURL(findLanguageDefault(listLocales))}`);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listLocales]);

  return {
    handleChangeLanguage,
  };
};

export default useLanguage;
