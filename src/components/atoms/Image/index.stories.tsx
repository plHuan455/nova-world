import { Story, Meta } from '@storybook/react';
import React from 'react';

import Image from '.';

import LogoNovaWorld from 'assets/images/logo/nova-world-white.png';

export default {
  title: 'Components/atoms/Image',
  component: Image,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div
    style={{
      padding: 20,
      background: '#000',
    }}
  >
    <div style={{ maxWidth: 150 }}>
      <Image imgSrc={LogoNovaWorld} ratio="logo-novaworld" />
    </div>
  </div>
);
