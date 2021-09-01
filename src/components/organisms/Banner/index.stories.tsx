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
  <Banner thumbnail={HomeBanner} isHomePage isHomePlayer videoSrc="https://www.youtube.com/watch?v=Ktm_JYmOeOc" />
);

export const BannerNormal: Story = () => (
  <Banner thumbnail={HomeBanner} />
);
