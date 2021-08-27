import { Story, Meta } from '@storybook/react';
import React from 'react';

import Divergences from '.';

export default {
  title: 'Components/templates/Divergences',
  component: Divergences,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Divergences />
);
