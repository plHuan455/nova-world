import i18n from 'i18next';
import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import NotifyContainer from './notify';

import useDidMount from 'hooks/useDidMount';
import useGaTracker from 'hooks/useGATracker';
import useGTM from 'hooks/useGTM';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getSystemsLocalesAsync } from 'store/locales';
import { getHeaderMenuAsync, getStaticSlugAsync, setPrefixAction } from 'store/menu';
import { getSystemsAsync } from 'store/systems';
import { getTradingFloorsAsync } from 'store/trading';
import { getPrefixCardDetail } from 'utils/language';

export interface MainLayoutContextProps {
  isHome?: boolean;
  setIsHome?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainLayoutContext = createContext<MainLayoutContextProps | undefined>(undefined);

export const MainLayoutProvider: React.FC = ({ children }) => {
  const location = useLocation();
  const { menu: { staticSlug } } = useAppSelector((state) => state);
  const [isHome, setIsHome] = useState<boolean>(true);
  const dispatch = useAppDispatch();

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
