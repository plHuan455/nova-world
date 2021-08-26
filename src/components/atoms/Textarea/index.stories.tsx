import { Story, Meta } from '@storybook/react';
import React from 'react';

import Textarea from '.';

export default {
  title: 'Components/atoms/Textarea',
  component: Textarea,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'Placeholder',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    error: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
  },
} as Meta;

export const normal: Story = ({
  placeholder,
  disabled,
  error,
}) => (
  <Textarea
    error={error}
    placeholder={placeholder}
    disabled={disabled}
  />
);
