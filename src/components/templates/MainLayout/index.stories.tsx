import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainLayout from '.';

export default {
  title: 'Components/templates/MainLayout',
  component: MainLayout,
  argTypes: {
    isHome: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta;

export const normal: Story = ({ isHome }) => (
  <BrowserRouter>
    <MainLayout isHome={isHome}>
      <div style={{
        height: '200vh',
        margin: -20,
        background: '#000',
      }}
      />
    </MainLayout>
  </BrowserRouter>
);
