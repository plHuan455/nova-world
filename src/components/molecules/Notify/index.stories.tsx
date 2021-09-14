import { Story, Meta } from '@storybook/react';
import React from 'react';

import Notify from '.';

export default {
  title: 'Components/molecules/Notify',
  component: Notify,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Notify message="Thành Công" type="success" isOpen />
);
