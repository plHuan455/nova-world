import { Story, Meta } from '@storybook/react';
import React from 'react';

import FeaturedProduct from '.';

import dummyData from 'assets/dataDummy/featuredProduct';

export default {
  title: 'Components/templates/FeaturedProduct',
  component: FeaturedProduct,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{
    padding: '150px 0',
  }}
  >
    <FeaturedProduct title="SẢN PHẨM NỔI BẬT" data={dummyData.cardFeatured} />
  </div>
);
