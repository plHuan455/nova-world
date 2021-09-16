import { Story, Meta } from '@storybook/react';
import React from 'react';

import LibraryProcess from '.';

import processData from 'assets/dataDummy/processLibrary';

export default {
  title: 'Components/templates/LibraryProcess',
  component: LibraryProcess,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div
    style={{
      paddingTop: '80px',
    }}
  >
    <LibraryProcess
      processList={processData}
    />
  </div>
);
