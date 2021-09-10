/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import * as DUMMY from 'assets/dataDummy/contact';
import { addressList } from 'assets/dataDummy/footer';
import Banner from 'components/organisms/Banner';
import Container from 'components/organisms/Container';
import FormContactUs from 'components/templates/FormContactUs';
import useMainLayout from 'hooks/useMainLayout';
// TODO: implement layout main
const Contact:React.FC = () => {
  useMainLayout('another');
  return (
    <>
      <section className="s-banner">
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="s-wrap s-donut">
        <Container>
          <FormContactUs
            {...DUMMY}
            dataInfoAddress={addressList}
          />
        </Container>
      </section>
    </>
  );
};

export default Contact;
