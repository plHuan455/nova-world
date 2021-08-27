import { Story, Meta } from '@storybook/react';
import React from 'react';

import IntroductionHome from '.';

export default {
  title: 'Components/templates/IntroductionHome',
  component: IntroductionHome,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <IntroductionHome />
);
