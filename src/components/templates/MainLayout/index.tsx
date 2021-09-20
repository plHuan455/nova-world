import React, { useMemo } from 'react';

import LogoNovaWorldWhite from 'assets/images/logo/nova-world-white.png';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import { useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';

const MainLayout: React.FC = ({ children }) => {
  const {
    trading: { data: addressList },
    menu: { header },
    systems: { data: dataSystems },
  } = useAppSelector((state) => state);

  const dataInfoAddress = useMemo(() => (
    addressList.map((item) => ({ name: item.name, address: item.address }))
  ), [addressList]);

  const footerProps = useMemo(() => ({
    addressList: dataInfoAddress,
    copyRight: dataSystems?.footer.copyright,
    logo: getImageURL(dataSystems?.footer.logo),
  }), [dataInfoAddress, dataSystems?.footer.copyright, dataSystems?.footer.logo]);

  const headerProps = useMemo(() => ({
    logoWhite: LogoNovaWorldWhite,
    logoBlue: getImageURL(dataSystems?.header.logo),
    menuList: header || [],
  }), [dataSystems?.header.logo, header]);

  return (
    <div className="t-mainlayout">
      <Header
        {...headerProps}
      />
      <div className="t-mainlayout_body">
        {children}
      </div>
      <Footer {...footerProps} />
    </div>
  );
};

export default MainLayout;
