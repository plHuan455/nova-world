import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Link from '.';

export default {
  title: 'Components/atoms/Link',
  component: Link,
  argTypes: {
    target: {
      control: {
        type: 'radio',
        options: ['_blank', '_self', '_parent', '_top'],
      },
      defaultValue: '_blank',
    },
  },
} as Meta;

export const useLink: Story = ({
  target,
}) => (
  <Router>
    <div style={{
      padding: '20px',
    }}
    >
      <Link useExternal target={target} href="/">Use Link</Link>
    </div>
  </Router>
);

export const normal: Story = () => (
  <Router>
    <div style={{
      padding: '20px',
    }}
    >
      <Link href="/home">home</Link>
    </div>
  </Router>
);
