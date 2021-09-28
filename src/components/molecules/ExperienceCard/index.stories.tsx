import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ExperienceCard from '.';

import imgExperianceCard from 'assets/images/experienceJourney/img_experienceCard.png';

export default {
  title: 'Components/molecules/ExperienceCard',
  component: ExperienceCard,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div
      style={{
        maxWidth: '546px',
      }}
    >
      <ExperienceCard
        listImg={[imgExperianceCard]}
        title="Vui chơi giải trí"
        location="Novaworld Ho Tram Wonderland"
        stt={1}
        href=""
      />
    </div>
  </BrowserRouter>
);
