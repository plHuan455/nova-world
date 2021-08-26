import { Story, Meta } from '@storybook/react';
import React from 'react';

import Divider from '.';

export default {
  title: 'Components/atoms/Divider',
  component: Divider,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Divider />
);
