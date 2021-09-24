import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import RegisterProjectForm from 'components/templates/RegisterProjectForm';
import { MainLayoutContext } from 'container/MainLayout';
import i18n from 'i18n';
import { getHomeLangURL } from 'utils/language';

export type AddressItemType = {
  name?: string,
  address?: string;
}

interface FooterProps {
  addressList: AddressItemType[];
  copyRight?: string;
  logo?: string;
  consultancySystem?: ConsultancySystem;
}

export const AddressItem: React.FC<AddressItemType> = ({
  name,
  address,
}) => (
  <div className="m-address-item">
    <Text modifiers={['14x21', '700', 'white']}>
      {name}
    </Text>
    <Text modifiers={['14x21', 'white']}>
      {address}
    </Text>
  </div>
);

const Footer: React.FC<FooterProps> = ({
  addressList,
  copyRight,
  logo,
  consultancySystem,
}) => {
  const mainLayoutContext = useContext(MainLayoutContext);

  const quantityItemRight = useMemo(() => {
    const surplus = addressList.length % 2;
    if (surplus > 0) return addressList.length / 2 + 1;
    return addressList.length / 2;
  }, [addressList]);

  return (
    <>
      {!mainLayoutContext?.isHome && (
        <div className="o-footeroverlay" />
      )}
      <div className="o-footer">
        <Animate
          extendClassName="o-footer_form"
          type="fadeInUp"
        >
          <RegisterProjectForm consultancySystem={consultancySystem} />
        </Animate>
        <div className="o-footer_top">
          <Container>
            <div className="o-footer_branch">
              <Link
                to={{
                  pathname: getHomeLangURL(i18n.language),
                  search: window.location.search,
                }}
                aria-label="logo-novaland"
              >
                <Image ratio="335x261" imgSrc={logo || ''} />
              </Link>
            </div>
            <div className="o-footer_content">
              <div className="o-footer_content_right">
                {
                  addressList.slice(0, quantityItemRight).map((item, index) => (
                    <AddressItem
                      key={`item-left-${index.toString()}`}
                      name={item.name}
                      address={item.address}
                    />
                  ))
                }
              </div>
              <div className="o-footer_content_left">
                {
                  addressList.slice(quantityItemRight, addressList.length).map((item, index) => (
                    <AddressItem
                      key={`item-right-${index.toString()}`}
                      name={item.name}
                      address={item.address}
                    />
                  ))
                }
              </div>
            </div>
          </Container>
        </div>
        <div className="o-footer_bottom">
          <Text modifiers={['12x21', '700', 's00015', 'white', 'center']}>
            {copyRight}
          </Text>
        </div>
      </div>
    </>
  );
};

export default Footer;
