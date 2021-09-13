import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MainLayout from 'components/templates/MainLayout';

export type PageType = 'home' | 'product' | 'another';

export interface MainLayoutContextProps {
  pageType?: PageType;
  setPageType?: React.Dispatch<React.SetStateAction<PageType | undefined>>;
}

export const MainLayoutContext = createContext<MainLayoutContextProps | undefined>(undefined);

export const MainLayoutProvider: React.FC = ({ children }) => {
  const location = useLocation();
  const [pageType, setPageType] = useState<PageType>();

  const context = {
    pageType,
    setPageType,
  };

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [location.pathname]);

  return (
    <MainLayoutContext.Provider value={context}>
      <MainLayout>
        {children}
      </MainLayout>
    </MainLayoutContext.Provider>
  );
};
