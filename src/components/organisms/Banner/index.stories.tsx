import { Story, Meta } from '@storybook/react';
import React from 'react';

import Banner from '.';

import PageBanner from 'assets/images/banners/banner_experience_journey.png';
import HomeBanner from 'assets/images/banners/banner_home.png';

export default {
  title: 'Components/organisms/Banner',
  component: Banner,
  argTypes: {
    layerDew: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const BannerHome: Story = ({
  layerDew,
}) => (
  <Banner layerDew={layerDew} thumbnail={HomeBanner} isHomePage isHomePlayer videoSrc="https://www.youtube.com/watch?v=Ktm_JYmOeOc" />
);

export const BannerNormal: Story = ({
  layerDew,
}) => (
  <Banner layerDew={layerDew} thumbnail={PageBanner} />
);
