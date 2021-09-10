import { Story, Meta } from '@storybook/react';
import React from 'react';

import Loading from '.';

export default {
  title: 'Components/atoms/Loading',
  component: Loading,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['white', 'green'],
      },
      defaultValue: 'green',
    },
  },
} as Meta;

export const normal: Story = ({ color }) => (
  <Loading modifiers={[color]} />
);
