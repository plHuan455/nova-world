import { Story, Meta } from '@storybook/react';
import React from 'react';

import ExperienceJourneyCard from '.';

import Container from 'components/organisms/Container';

export default {
  title: 'Components/molecules/ExperienceJourneyCard',
  component: ExperienceJourneyCard,
  argTypes: {},
} as Meta;

const info = {
  content: 'Sở hữu hệ sinh thái nghỉ dưỡng đẳng cấp mang phong cách cổ tích như: khách sạn lâu đài Movenpick, hồ bơi vô cực, quảng trường biển,…',
  btnLabel: 'Khám phá ngay',
};

export const normal: Story = () => (
  <Container>
    <ExperienceJourneyCard
      imgSrc="https://source.unsplash.com/random"
      title="Vui chơi giải trí"
      info={info}
    />
  </Container>
);
