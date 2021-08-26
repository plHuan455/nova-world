import { Story, Meta } from '@storybook/react';
import React from 'react';

import Text from '.';

export default {
  title: 'Components/atoms/Text',
  component: Text,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Text />
);
