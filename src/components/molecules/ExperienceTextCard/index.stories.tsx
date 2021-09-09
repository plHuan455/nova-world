import { Story, Meta } from '@storybook/react';
import React from 'react';

import ExperienceTextCard from '.';

export default {
  title: 'Components/molecules/ExperienceTextCard',
  component: ExperienceTextCard,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <ExperienceTextCard content="Sở hữu hệ sinh thái nghỉ dưỡng đẳng cấp mang phong cách cổ tích như: khách sạn lâu đài Movenpick, hồ bơi vô cực, quảng trường biển,…" btnLabel="Khám phá ngay" />
);
