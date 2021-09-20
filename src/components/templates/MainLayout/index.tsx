import React, { useMemo } from 'react';

import { copyRight } from 'assets/dataDummy/footer';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import SmoothScroll from 'components/organisms/SmoothScroll';
import { useAppSelector } from 'store/hooks';

const MainLayout: React.FC = ({ children }) => {
  const {
    trading: { data: addressList },
  } = useAppSelector((state) => state);

  const dataInfoAddress = useMemo(() => (
    addressList.map((item) => ({ name: item.name, address: item.address }))
  ), [addressList]);

  return (
    <div className="t-mainlayout">
      <Header />
      <SmoothScroll>
        <div className="t-mainlayout_body">
          {children}
        </div>
        <Footer addressList={dataInfoAddress} copyRight={copyRight} />
      </SmoothScroll>
    </div>
  );
};

export default MainLayout;
