import React, { useMemo } from 'react';

import useLanguage from 'hooks/useLanguage';
import i18n from 'i18n';
import { useAppSelector } from 'store/hooks';
import { getImageURL, getLangURL } from 'utils/functions';
import { getSlugByTemplateCode } from 'utils/language';

const Header = React.lazy(() => import('components/organisms/Header'));
const Footer = React.lazy(() => import('components/organisms/Footer'));

const MainLayout: React.FC = ({ children }) => {
  const {
    trading: { data: addressList },
    menu: { header },
    systems: { data: dataSystems },
  } = useAppSelector((state) => state);

  const baseSystem = useAppSelector((state) => state.systems.baseSystem?.staticPages.novaworld);

  const { handleChangeLanguage } = useLanguage();

  const dataInfoAddress = useMemo(() => (
    addressList.map((item) => ({ name: item.name, address: item.address }))
  ), [addressList]);

  const footerProps = useMemo(() => ({
    addressList: dataInfoAddress,
    copyRight: dataSystems?.footer.copyright,
    logo: getImageURL(dataSystems?.footer.logo),
    consultancySystem: dataSystems?.consultancy,
  }), [dataInfoAddress, dataSystems]);

  const headerProps = useMemo(() => ({
    logoWhite: getImageURL(dataSystems?.header?.logoTransparent),
    logoBlue: getImageURL(dataSystems?.header?.logo),
    menuList: header || [],
    handleChangeLanguage,
    slugSearch: `${getLangURL(i18n.language)}/${getSlugByTemplateCode('search', baseSystem)}`,
  }), [dataSystems, header, handleChangeLanguage, baseSystem]);

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
