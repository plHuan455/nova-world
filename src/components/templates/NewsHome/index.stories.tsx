import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NewsHome from '.';

import tabDataNewsHome from 'assets/dataDummy/newshome';

export default {
  title: 'Components/templates/NewsHome',
  component: NewsHome,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <NewsHome
      title="TIN TỨC"
      tabDataNewsHome={tabDataNewsHome}
    />
  </Router>
);
