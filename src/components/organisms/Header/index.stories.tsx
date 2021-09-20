import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '.';

import LogoNovaWorldBlue from 'assets/images/logo/nova-world-blue.svg';
import LogoNovaWorldWhite from 'assets/images/logo/nova-world-white.png';

export default {
  title: 'Components/organisms/Header',
  component: Header,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <Header menuList={[]} logoWhite={LogoNovaWorldWhite} logoBlue={LogoNovaWorldBlue} />
  </BrowserRouter>
);
