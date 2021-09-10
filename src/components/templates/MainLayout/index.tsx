import React from 'react';

import { addressList, copyRight } from 'assets/dataDummy/footer';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';

const MainLayout: React.FC = ({ children }) => (
  <div className="t-mainlayout">
    <Header />
    <div className="t-mainlayout_body">
      {children}
    </div>
    <Footer addressList={addressList} copyRight={copyRight} />
  </div>
);

export default MainLayout;
