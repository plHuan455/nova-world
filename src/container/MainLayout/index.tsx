import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import NotifyContainer from './notify';

import MainLayout from 'components/templates/MainLayout';
import { useAppDispatch } from 'store/hooks';
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
  const context = {
    pageType,
    setPageType,
  };

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    dispatch(getTradingFloorsAsync());
  }, [dispatch]);

  return (
    <MainLayoutContext.Provider value={context}>
      <MainLayout>
        {children}
      </MainLayout>
      <NotifyContainer />
    </MainLayoutContext.Provider>
  );
};
