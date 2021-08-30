import { Story, Meta } from '@storybook/react';
import React from 'react';

import IntroductionHome from '.';

import dataIntro from 'assets/dataDummy/introduction';

export default {
  title: 'Components/templates/IntroductionHome',
  component: IntroductionHome,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div
    style={{
      paddingBottom: '300px',
    }}
  >
    <IntroductionHome data={dataIntro.cardIntro} />
  </div>
);
