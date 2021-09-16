import { Story, Meta } from '@storybook/react';
import React from 'react';

import LibraryImage from '.';

import imageLibraryData from 'assets/dataDummy/imageLibrary';

export default {
  title: 'Components/organisms/LibraryImage',
  component: LibraryImage,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <LibraryImage listImages={imageLibraryData} totalPage={3} page={1} />
);
