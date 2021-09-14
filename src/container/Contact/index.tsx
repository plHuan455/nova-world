/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';

import * as DUMMY from 'assets/dataDummy/contact';
import Banner from 'components/organisms/Banner';
import Container from 'components/organisms/Container';
import FormContactUs from 'components/templates/FormContactUs';
import useMainLayout from 'hooks/useMainLayout';
import { useAppSelector } from 'store/hooks';

const Contact:React.FC = () => {
  useMainLayout('another');

  const {
    trading: { data: addressList },
  } = useAppSelector((state) => state);

  const dataInfoAddress = useMemo(() => (
    addressList.map((item) => ({ name: item.name, address: item.address }))
  ), [addressList]);

  const mapMarkerData = useMemo(
    () => addressList.map((item) => ({
      lat: Number(item.latitude),
      lng: Number(item.longitude),
    })),
    [addressList],
  );
  const dataMap = useMemo(() => ({
    mapMarker: mapMarkerData,
    mapAPIkey: 'AIzaSyAt4eV8aoSdhKXHQSQvJc7aSEGlcnUVbdo',
  }), [mapMarkerData]);

  return (
    <>
      <section className="s-banner">
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="s-wrap s-donut">
        <Container>
          <FormContactUs
            {...DUMMY}
            dataInfoAddress={dataInfoAddress}
            dataMap={dataMap}
          />
        </Container>
      </section>
    </>
  );
};

export default Contact;
