import { Story, Meta } from '@storybook/react';
import React from 'react';

import RegisterProjectForm from '.';

export default {
  title: 'Components/templates/RegisterProjectForm',
  component: RegisterProjectForm,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{
    padding: '100px 0',
  }}
  >
    <RegisterProjectForm />
  </div>
);
