import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LocationMap from '.';

import imgLocationCard from 'assets/images/habana.jpeg';

export default {
  title: 'Components/organisms/LocationMap',
  component: LocationMap,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <LocationMap data={{
      tropicana: {
        imgSrc: imgLocationCard, title: 'Novaworld Hồ Tràm - Morito', href: '',
      },
      habana: {
        imgSrc: imgLocationCard, title: 'Novaworld Hồ Tràm - Morito', href: '',
      },
      morito: {
        imgSrc: imgLocationCard, title: 'Novaworld Hồ Tràm - Morito', href: '',
      },
      wonderland: {
        imgSrc: imgLocationCard, title: 'Novaworld Hồ Tràm - Morito', href: '',
      },
    }}
    />
  </Router>
);
