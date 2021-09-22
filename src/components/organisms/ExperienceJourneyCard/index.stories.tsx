import { Story, Meta } from '@storybook/react';
import React from 'react';

import ExperienceJourneyCard from '.';

import Container from 'components/organisms/Container';

export default {
  title: 'Components/organisms/ExperienceJourneyCard',
  component: ExperienceJourneyCard,
  argTypes: {},
} as Meta;

const info = {
  imgSrc: 'https://source.unsplash.com/random',
  title: 'Vui chơi giải trí',
  content: 'Sở hữu hệ sinh thái nghỉ dưỡng đẳng cấp mang phong cách cổ tích như: khách sạn lâu đài Movenpick, hồ bơi vô cực, quảng trường biển,…',
  btnLabel: 'Khám phá ngay',
};

export const right: Story = () => (
  <Container>
    <div style={{ paddingBottom: '200px' }}>
      <ExperienceJourneyCard
        {...info}
      />
    </div>
  </Container>
);

export const left: Story = () => (
  <Container>
    <div style={{ paddingBottom: '200px' }}>
      <ExperienceJourneyCard
        position="left"
        {...info}
      />
    </div>
  </Container>
);

export const bottom: Story = () => (
  <Container>
    <div style={{ paddingBottom: '200px' }}>
      <ExperienceJourneyCard
        position="bottom"
        ratio="1126x617"
        {...info}
      />
    </div>
  </Container>
);
