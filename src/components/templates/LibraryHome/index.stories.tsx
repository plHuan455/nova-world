import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LibraryHome from '.';

import libraryDummy from 'assets/dataDummy/library';

export default {
  title: 'Components/templates/LibraryHome',
  component: LibraryHome,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <LibraryHome title="THƯ VIỆN" data={libraryDummy.card} />
  </BrowserRouter>
);
