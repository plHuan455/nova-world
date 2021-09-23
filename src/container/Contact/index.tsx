import React, { useMemo } from 'react';

import Banner from 'components/organisms/Banner';
import Container from 'components/organisms/Container';
import FormContactUs from 'components/templates/FormContactUs';
import HelmetComponent from 'container/MainLayout/helmet';
import useMainLayout from 'hooks/useMainLayout';
import { useAppSelector } from 'store/hooks';
import { getBlockData } from 'utils/functions';

const Contact:React.FC<BasePageData<ContactPage>> = ({
  banners,
  blocks,
  seoData,
}) => {
  const { banner } = useMainLayout({ isHome: false, banners });
  const addressList = useAppSelector((state) => state.trading.data);

  const { title, col1, col2 } = useMemo(() => getBlockData('section1', blocks), [blocks]) as ContactBlock;

  const dataInfoAddress = useMemo(() => (
    addressList.map((item) => ({ name: item.name, address: item.address }))
  ), [addressList]);

  const dataMap = useMemo(() => ({
    mapMarker: addressList.map((item) => ({
      lat: Number(item.latitude),
      lng: Number(item.longitude),
    })),
    mapAPIKey: 'AIzaSyAt4eV8aoSdhKXHQSQvJc7aSEGlcnUVbdo',
  }), [addressList]);

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section className="s-banner">
        <Banner thumbnail={banner} />
      </section>
      <section className="s-wrap s-donut">
        <Container>
          <FormContactUs
            title={title}
            titleAddress={col1.title}
            consultancySystem={{
              ...col2,
              btnText: 'đăng ký', // TODO: Update after BE
            }}
            dataInfoAddress={dataInfoAddress}
            dataMap={dataMap}
          />
        </Container>
      </section>
    </>
  );
};

export default Contact;
