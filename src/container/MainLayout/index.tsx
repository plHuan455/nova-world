import i18n from 'i18next';
import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import NotifyContainer from './notify';

import useDidMount from 'hooks/useDidMount';
import useGaTracker from 'hooks/useGATracker';
import useGTM from 'hooks/useGTM';
import useQueryParams from 'hooks/useQueryParams';
import { UTMParams } from 'services/contact/type';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getSystemsLocalesAsync } from 'store/locales';
import { getHeaderMenuAsync, getStaticSlugAsync, setPrefixAction } from 'store/menu';
import { getSystemsAsync } from 'store/systems';
import { getTradingFloorsAsync } from 'store/trading';
import { addUtmParams } from 'store/utm';
import {
  checkActiveLang, findLanguageDefault, getLangURL, getPrefixCardDetail,
} from 'utils/language';

export interface MainLayoutContextProps {
  isHome?: boolean;
  setIsHome?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainLayoutContext = createContext<MainLayoutContextProps | undefined>(undefined);

export const MainLayoutProvider: React.FC = ({ children }) => {
  const location = useLocation();
  const {
    menu: { staticSlug },
    locales: { listLocales },
    systems: { data: dataSystems },
  } = useAppSelector((state) => state);
  const [isHome, setIsHome] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const params = useQueryParams<UTMParams>();

  useGaTracker();
  useGTM();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useDidMount(() => {
    dispatch(getSystemsLocalesAsync());
    dispatch(getHeaderMenuAsync());
    dispatch(getStaticSlugAsync());
    dispatch(getTradingFloorsAsync());
    dispatch(getSystemsAsync());
    if (params && Object.keys(params).length > 0) {
      dispatch(addUtmParams(params));
    }
  });

  useEffect(() => {
    if (staticSlug) {
      dispatch(setPrefixAction({
        newsDetail: getPrefixCardDetail('news', staticSlug, i18n.language),
        journeysDetail: getPrefixCardDetail('journey', staticSlug, i18n.language),
      }));
    }
  }, [dispatch, staticSlug]);

  useEffect(() => {
    // language dont active
    if (listLocales
      && !checkActiveLang(i18n.language as keyof LocalesResponse, listLocales)
    ) {
      const pathName = getLangURL(findLanguageDefault(listLocales));
      window.location.href = window.location.origin + pathName;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listLocales]);

  useEffect(() => {
    if (dataSystems?.footScripts) {
      const script = document.createElement('script');
      script.innerHTML = dataSystems.footScripts;
      script.async = true;

      document.body.appendChild(script);
    }
  }, [dataSystems]);

  const context = useMemo(() => ({
    isHome,
    setIsHome,
  }), [isHome, setIsHome]);

  return (
    <MainLayoutContext.Provider value={context}>
      {children}
      <NotifyContainer />
    </MainLayoutContext.Provider>
  );
};
