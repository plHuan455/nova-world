import { Story, Meta } from '@storybook/react';
import React from 'react';

import Input from '.';

export default {
  title: 'Components/atoms/Input',
  component: Input,
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
  <Input
    error={error}
    placeholder={placeholder}
    disabled={disabled}
  />
);
