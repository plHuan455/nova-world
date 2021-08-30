import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Divergences from '.';

import dataDivergences from 'assets/dataDummy/divergences';

export default {
  title: 'Components/templates/Divergences',
  component: Divergences,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{
    padding: '50px 0',
  }}
  >
    <BrowserRouter>
      <Divergences
        title="CÁC PHÂN KỲ"
        data={dataDivergences}
      />
    </BrowserRouter>
  </div>
);
