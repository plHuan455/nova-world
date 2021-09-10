/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import * as DUMMY from 'assets/dataDummy/contact';
import { addressList } from 'assets/dataDummy/footer';
import Container from 'components/organisms/Container';
import FormContactUs from 'components/templates/FormContactUs';
// TODO: implement layout main
const Contact:React.FC = () => (
  <Container>
    <FormContactUs
      {...DUMMY}
      dataInfoAddress={addressList}
    />
  </Container>
);

export default Contact;
