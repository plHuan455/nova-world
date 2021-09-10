import React, { createContext, useState } from 'react';

import MainLayout from 'components/templates/MainLayout';

export type PageType = 'home' | 'product' | 'another';

export interface MainLayoutContextProps {
  pageType?: PageType;
  setPageType?: React.Dispatch<React.SetStateAction<PageType | undefined>>;
}

export const MainLayoutContext = createContext<MainLayoutContextProps | undefined>(undefined);

export const MainLayoutProvider: React.FC = ({ children }) => {
  const [pageType, setPageType] = useState<PageType>();

  const context = {
    pageType,
    setPageType,
  };

  return (
    <MainLayoutContext.Provider value={context}>
      <MainLayout>
        {children}
      </MainLayout>
    </MainLayoutContext.Provider>
  );
};
