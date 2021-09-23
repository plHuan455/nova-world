import React, { useMemo } from 'react';

import { copyRight } from 'assets/dataDummy/footer';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import { useAppSelector } from 'store/hooks';

const MainLayout: React.FC = ({ children }) => {
  const {
    trading: { data: addressList },
    menu: { header },
  } = useAppSelector((state) => state);

  const dataInfoAddress = useMemo(() => (
    addressList.map((item) => ({ name: item.name, address: item.address }))
  ), [addressList]);

  // console.log(header);

  return (
    <div className="t-mainlayout">
      <Header menuList={header || []} />
      <div className="t-mainlayout_body">
        {children}
      </div>
      <Footer addressList={dataInfoAddress} copyRight={copyRight} />
    </div>
  );
};

export default MainLayout;
