import { Story, Meta } from '@storybook/react';
import React from 'react';

import LibraryImageCarousel from '.';

import imageLibraryData from 'assets/dataDummy/imageLibrary';

export default {
  title: 'Components/templates/LibraryImageCarousel',
  component: LibraryImageCarousel,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <LibraryImageCarousel imageList={imageLibraryData} />
);
