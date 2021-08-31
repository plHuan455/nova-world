import { Story, Meta } from '@storybook/react';
import React from 'react';

import Banner from '.';

import HomeBanner from 'assets/images/home-banner.jpg';

export default {
  title: 'Components/organisms/Banner',
  component: Banner,
  argTypes: {},
} as Meta;

export const BannerHome: Story = () => (
  <Banner thumbnail={HomeBanner} isHomePage isHomePlayer videoSrc="https://youtu.be/E2Tj_CQDrk4" />
);

export const BannerNormal: Story = () => (
  <Banner thumbnail={HomeBanner} />
);
