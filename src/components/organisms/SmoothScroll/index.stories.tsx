import { Story, Meta } from '@storybook/react';
import React from 'react';

import SmoothScroll from '.';

export default {
  title: 'Components/organisms/SmoothScroll',
  component: SmoothScroll,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <SmoothScroll />
);
