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
  <div style={{ background: 'rgb(12, 45, 6)' }}>
    <FormRegister consultancySystem={consultancySystem} />
  </div>
);
