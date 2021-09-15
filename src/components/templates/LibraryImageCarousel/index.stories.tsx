import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LibraryImageCarousel from '.';

import imageLibraryData from 'assets/dataDummy/imageLibrary';

export default {
  title: 'Components/templates/LibraryImageCarousel',
  component: LibraryImageCarousel,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <LibraryImageCarousel imageList={imageLibraryData} />
  </Router>
);
