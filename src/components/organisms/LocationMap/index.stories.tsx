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
    <LocationMap item={[
      {
        title: 'Novaworld Hồ Tràm - Morito',
        key: 'Habana',
        thumbnail: imgLocationCard,
        link: {
          target: '',
          text: 'Xem thêm',
          url: '',
        },
      },
      {
        key: 'Habana',
        thumbnail: imgLocationCard,
        title: 'Novaworld Hồ Tràm - Morito',
        link: {
          target: '',
          text: 'Xem thêm',
          url: '',
        },
      },
      {
        key: 'Morito',
        thumbnail: imgLocationCard,
        title: 'Novaworld Hồ Tràm - Morito',
        link: {
          target: '',
          text: 'Xem thêm',
          url: '',
        },
      },
      {
        key: 'Wonderland',
        thumbnail: imgLocationCard,
        title: 'Novaworld Hồ Tràm - Morito',
        link: {
          target: '',
          text: 'Xem thêm',
          url: '',
        },
      },
    ]}
    />
  </Router>
);
