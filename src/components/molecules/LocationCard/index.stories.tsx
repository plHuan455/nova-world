import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LocationCard from '.';

import imgLocationCard from 'assets/images/habana.jpeg';

export default {
  title: 'Components/molecules/LocationCard',
  component: LocationCard,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <div style={{
      maxWidth: '257px',
    }}
    >
      <LocationCard imgSrc={imgLocationCard} title="Novaworld Hồ Tràm - Morito" href="" text="Xem thêm" />
    </div>
  </Router>
);
