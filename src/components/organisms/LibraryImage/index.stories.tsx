import { Story, Meta } from '@storybook/react';
import React from 'react';

import LibraryImage from '.';

export default {
  title: 'Components/organisms/LibraryImage',
  component: LibraryImage,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <LibraryImage
    listImages={new Array(10).fill({
      title: 'Ocean pool - phân kỳ: tropicana',
      imgSrc: 'https://source.unsplash.com/random',
    })}
    totalPage={3}
    page={1}
  />
);
