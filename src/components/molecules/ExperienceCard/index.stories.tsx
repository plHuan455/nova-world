import { Story, Meta } from '@storybook/react';
import React from 'react';

import ExperienceCard from '.';

import imgExperianceCard from 'assets/images/img_experienceCard.png';

export default {
  title: 'Components/molecules/ExperienceCard',
  component: ExperienceCard,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div
    style={{
      maxWidth: '546px',
    }}
  >
    <ExperienceCard
      imgSrc={imgExperianceCard}
      title="Vui chơi giải trí"
      location="Novaworld Ho Tram Wonderland"
      stt="01"
    />
  </div>
);
