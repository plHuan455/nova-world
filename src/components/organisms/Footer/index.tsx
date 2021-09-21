import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import logoNovaLand from 'assets/images/logo/nova-land.svg';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import RegisterProjectForm from 'components/templates/RegisterProjectForm';
import { MainLayoutContext } from 'container/MainLayout';
import mapModifiers from 'utils/functions';

export type AddressItemType = {
  name?: string,
  address?: string;
}

interface FooterProps {
  addressList: AddressItemType[];
  copyRight?: string;
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
}) => {
  const mainLayoutContext = useContext(MainLayoutContext);

  const quantityItemRight = useMemo(() => {
    const surplus = addressList.length % 2;
    if (surplus > 0) return addressList.length / 2 + 1;
    return addressList.length / 2;
  }, [addressList]);

  return (
    <>
      {mainLayoutContext?.pageType === 'another' && (
        <div className="o-footeroverlay" />
      )}
      <div className={mapModifiers('o-footer', mainLayoutContext?.pageType)}>
        <Animate
          extendClassName="o-footer_form"
          type="fadeInUp"
        >
          <RegisterProjectForm />
        </Animate>
        <div className="o-footer_top">
          <Container>
            <div className="o-footer_branch">
              <Link
                to={{
                  pathname: '/',
                  search: window.location.search,
                }}
                aria-label="logo-novaland"
              >
                <Image ratio="335x261" imgSrc={logoNovaLand} />
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
