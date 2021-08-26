import { Story, Meta } from '@storybook/react';
import React from 'react';

import Icon from '.';

export default {
  title: 'Components/atoms/Icon',
  component: Icon,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Icon iconName="search" />
);
