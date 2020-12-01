import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import base from 'paths.macro';
import React from 'react';

import RoundedButton from '.';

export default {
  title: `Components/${base.replace('/src/components/', '').replace(/\/$/, '')}`,
  component: RoundedButton,
} as Meta;

export const withText: Story = () => (
  <RoundedButton color="hotpink" onClick={action('clicked')}>Hello Button</RoundedButton>
);

export const withSomeEmoji: Story = () => (
  <RoundedButton color="papayawhip" onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </RoundedButton>
);
