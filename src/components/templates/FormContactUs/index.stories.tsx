/* eslint-disable react/jsx-props-no-spreading */
import { Story, Meta } from '@storybook/react';
import React from 'react';

import FormContactUs from '.';

import * as DUMMY from 'assets/dataDummy/contact';
import Container from 'components/organisms/Container';

export default {
  title: 'Components/templates/FormContactUs',
  component: FormContactUs,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Container>
    <FormContactUs
      {...DUMMY}
    />
  </Container>
);
