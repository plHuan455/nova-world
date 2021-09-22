import i18n from 'i18next';
import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import NotifyContainer from './notify';

import MainLayout from 'components/templates/MainLayout';
import useDidMount from 'hooks/useDidMount';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getSystemsLocalesAsync } from 'store/locales';
import { getHeaderMenuAsync, getStaticSlugAsync, setPrefixAction } from 'store/menu';
import { getTradingFloorsAsync } from 'store/trading';
import { getPrefixCardDetail } from 'utils/language';

export type PageType = 'home' | 'product' | 'another';

export interface MainLayoutContextProps {
  pageType?: PageType;
  setPageType?: React.Dispatch<React.SetStateAction<PageType | undefined>>;
}

export const MainLayoutContext = createContext<MainLayoutContextProps | undefined>(undefined);

export const MainLayoutProvider: React.FC = ({ children }) => {
  const location = useLocation();
  const { menu: { staticSlug } } = useAppSelector((state) => state);
  const [pageType, setPageType] = useState<PageType>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useDidMount(() => {
    dispatch(getSystemsLocalesAsync());
    dispatch(getHeaderMenuAsync());
    dispatch(getStaticSlugAsync());
    dispatch(getTradingFloorsAsync());
  });

  useEffect(() => {
    if (staticSlug) {
      dispatch(setPrefixAction({
        newsDetail: getPrefixCardDetail('news', staticSlug, i18n.language),
        journeysDetail: getPrefixCardDetail('journey', staticSlug, i18n.language),
      }));
    }
  }, [dispatch, staticSlug]);

  const context = useMemo(() => ({
    pageType,
    setPageType,
  }), [pageType, setPageType]);

  return (
    <MainLayoutContext.Provider value={context}>
      <MainLayout>
        {children}
      </MainLayout>
      <NotifyContainer />
    </MainLayoutContext.Provider>
  );
};
