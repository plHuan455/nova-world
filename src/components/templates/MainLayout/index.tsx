import React from 'react';

import { addressList, copyRight } from 'assets/dataDummy/footer';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import mapModifiers from 'utils/functions';

interface MainLayoutProps {
  isHome?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ isHome, children }) => (
  <div className={mapModifiers('t-mainlayout', isHome && 'transparent')}>
    <Header isHome={isHome} />
    <div className="t-mainlayout_body">
      {children}
    </div>
    <Footer addressList={addressList} copyRight={copyRight} />
  </div>
);

export default MainLayout;
