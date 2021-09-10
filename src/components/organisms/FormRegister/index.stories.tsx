import { Story, Meta } from '@storybook/react';
import React from 'react';

import FormRegister from '.';

import { consultancySystem } from 'assets/dataDummy/contact';

export default {
  title: 'Components/organisms/FormRegister',
  component: FormRegister,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ background: 'c0d2D06' }}>
    <FormRegister consultancySystem={consultancySystem} />
  </div>
);
