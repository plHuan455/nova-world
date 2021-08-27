import { Story, Meta } from '@storybook/react';
import React from 'react';

import LocationMap from '.';

export default {
  title: 'Components/organisms/LocationMap',
  component: LocationMap,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <LocationMap />
);
