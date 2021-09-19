import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LibraryEvents from '.';

import eventList from 'assets/dataDummy/eventLibrary';

export default {
  title: 'Components/templates/LibraryEvents',
  component: LibraryEvents,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <LibraryEvents
      listEvent={eventList}
      totalPage={2}
    />
  </Router>
);
