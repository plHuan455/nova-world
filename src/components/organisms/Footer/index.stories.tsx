import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '.';

import { addressList, copyRight } from 'assets/dataDummy/footer';
import logoNovaLand from 'assets/images/logo/nova-land.svg';

export default {
  title: 'Components/organisms/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{
      height: '200px',
    }}
    />
    <Footer
      logo={logoNovaLand}
      addressList={addressList}
      copyRight={copyRight}
    />
  </BrowserRouter>
);
