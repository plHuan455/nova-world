import { Story, Meta } from '@storybook/react';
import React from 'react';

import LibraryEventPopup from '.';

export default {
  title: 'Components/templates/LibraryEventPopup',
  component: LibraryEventPopup,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
        options: [true, false],
      },
      defaultValue: false,
    },
  },
} as Meta;

const eventData = {
  imgSrc: 'https://source.unsplash.com/random',
  title: 'CỔNG VÀO KHU THƯƠNG MẠI 5',
  images: [],
  description: 'Ưu thế đó cộng hưởng cùng vẻ đẹp thiên nhiên rừng – biển nguyên sơ, và bầu không khí trong lành miền nhiệt đới đang tạo nên Wonderland – vùng đất diệu kỳ và đẳng cấp khác biệt!',
};

export const normal: Story = ({ isOpen }) => (
  <LibraryEventPopup
    isOpen={isOpen}
    handleClose={() => console.log('close')}
    eventData={eventData}
  />
);
