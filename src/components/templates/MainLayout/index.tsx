import React, { useMemo } from 'react';

import { useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';

const Header = React.lazy(() => import('components/organisms/Header'));
const Footer = React.lazy(() => import('components/organisms/Footer'));

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
    logoWhite: getImageURL(dataSystems?.header?.logoTransparent),
    logoBlue: getImageURL(dataSystems?.header?.logo),
    menuList: header || [],
  }), [dataSystems, header]);

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
