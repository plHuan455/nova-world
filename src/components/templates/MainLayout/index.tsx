import React from 'react';

import Header from 'components/organisms/Header';

interface MainLayoutProps {
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="t-mainlayout">
    <Header />
    <div className="t-mainlayout_body">
      {children}
    </div>
  </div>
);

export default MainLayout;
