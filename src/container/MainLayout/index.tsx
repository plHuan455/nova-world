import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import NotifyContainer from './notify';

import MainLayout from 'components/templates/MainLayout';
import useDidMount from 'hooks/useDidMount';
import { useAppDispatch } from 'store/hooks';
import { getHeaderMenuAsync, getStaticSlugAsync } from 'store/menu';
import { getTradingFloorsAsync } from 'store/trading';

export type PageType = 'home' | 'product' | 'another';

export interface MainLayoutContextProps {
  pageType?: PageType;
  setPageType?: React.Dispatch<React.SetStateAction<PageType | undefined>>;
}

export const MainLayoutContext = createContext<MainLayoutContextProps | undefined>(undefined);

export const MainLayoutProvider: React.FC = ({ children }) => {
  const location = useLocation();
  const [pageType, setPageType] = useState<PageType>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useDidMount(() => {
    dispatch(getHeaderMenuAsync());
    dispatch(getStaticSlugAsync());
    dispatch(getTradingFloorsAsync());
  });

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
