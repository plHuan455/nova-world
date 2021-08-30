import React from 'react';
import ReactDOM from 'react-dom';

import GeoLocationHome from '.';

const dataLocationMap = {
  imgSrc: '',
  title: 'Novaworld Hồ Tràm - Morito',
  seemore: 'Xem thêm',
  href: '',
};

describe('<GeoLocationHome />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GeoLocationHome dataLocationMap={dataLocationMap} title="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
