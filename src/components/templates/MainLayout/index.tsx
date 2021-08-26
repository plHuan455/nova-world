import React from 'react';

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
  </div>
);

export default MainLayout;
