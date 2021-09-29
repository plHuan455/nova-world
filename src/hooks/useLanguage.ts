import { useAppSelector, useAppDispatch } from 'store/hooks';
import { openNotify } from 'store/notify';
import {
  checkActiveLang,
  getLangURL,
} from 'utils/language';

const useLanguage = () => {
  const dispatch = useAppDispatch();
  const {
    locales: {
      listLocales,
      pageTranslation: { translation, isDetail },
    },
  } = useAppSelector((state) => state);

  const handleChangeLanguage = (lang: keyof LocalesResponse) => {
    // Page Detail news , detail ExperienceJourney
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
    // language dont active
    const messageError = listLocales ? listLocales[lang]?.message : 'Error';
    dispatch(openNotify({ type: 'warning', message: messageError }));
  };

  return {
    handleChangeLanguage,
  };
};

export default useLanguage;
