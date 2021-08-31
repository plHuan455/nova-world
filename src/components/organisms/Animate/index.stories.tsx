import { Story, Meta } from '@storybook/react';
import React from 'react';

import Animate from '.';

export default {
  title: 'Components/organisms/Animate',
  component: Animate,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Animate />
);
