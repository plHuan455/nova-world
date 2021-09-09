import { Story, Meta } from '@storybook/react';
import React from 'react';

import Tag from '.';

export default {
  title: 'Components/atoms/Tag',
  component: Tag,
  argTypes: {
    active: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta;

export const normal: Story = ({ active }) => (
  <Tag isActive={active}>Wonderland</Tag>
);
