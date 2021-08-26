import { Story, Meta } from '@storybook/react';
import React from 'react';

import Button from '.';

export default {
  title: 'Components/atoms/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const normal: Story = ({
  disabled,
  loading,
}) => (
  <Button
    disabled={disabled}
    loading={loading}
  >
    ĐĂNG KÝ
  </Button>
);
