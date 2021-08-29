import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LocationMap from '.';

import imgLocationCard from 'assets/images/img_locationcard.png';

export default {
  title: 'Components/organisms/LocationMap',
  component: LocationMap,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <LocationMap imgSrc={imgLocationCard} title="Novaworld Hồ Tràm - Morito" seemore="Xem thêm" href="" />
  </Router>
);
