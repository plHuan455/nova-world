import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NewsList from '.';

import { cateList, listPanel } from 'assets/dataDummy/newsList';

export default {
  title: 'Components/templates/NewsList',
  component: NewsList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <NewsList
      title="Tin tức"
      totalPage={2}
      fetching={false}
      listLabel={cateList}
      listPanel={listPanel}
    />
  </Router>
);
