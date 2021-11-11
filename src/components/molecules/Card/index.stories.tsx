import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Card from '.';

export default {
  title: 'Components/molecules/Card',
  component: Card,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{
      maxWidth: 335,
    }}
    >
      <Card imgSrc="https://source.unsplash.com/random" title="Mừng khai chương" description="Bất động sản nghỉ dưỡng tại Việt Nam luôn được xem là phân khúc hấp dẫn trong mắt các nhà đầu tư." href="" />
    </div>
  </BrowserRouter>
);
