import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GeoLocationHome from '.';

import dataLocation from 'assets/dataDummy/location';

export default {
  title: 'Components/templates/GeoLocationHome',
  component: GeoLocationHome,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <GeoLocationHome item={dataLocation} title="VỊ TRÍ ĐỊA LÝ" desc="Sở hữu vị thế đắc địa sông biển giao hòa duy nhất tại NovaWorld Ho Tram. Cách TPHCM 90 phút di chuyển qua cao tốc Long Thành – Dầu Giây. 60 phút di chuyển từ sân bay quốc tế Long Thành. Cơ sở hạ tầng giao thông phát triển hiện hữu, hoàn chỉnh." />
  </Router>
);
