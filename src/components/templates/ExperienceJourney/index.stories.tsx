import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ExperienceJourney from '.';

// import dataExperienceJourney from 'assets/dataDummy/experiencejourney';

export default {
  title: 'Components/templates/ExperienceJourney',
  component: ExperienceJourney,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <ExperienceJourney
      title="HÀNH TRÌNH TRẢI NGHIỆM"
      dataExperienceJourney={[]}
    />
  </BrowserRouter>
);
