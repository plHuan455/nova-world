import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LibraryImageCarousel from '.';

export default {
  title: 'Components/templates/LibraryImageCarousel',
  component: LibraryImageCarousel,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <LibraryImageCarousel imageList={new Array(10).fill({
      title: 'Ocean pool - phân kỳ: tropicana',
      imgSrc: 'https://source.unsplash.com/random',
    })}
    />
  </Router>
);
