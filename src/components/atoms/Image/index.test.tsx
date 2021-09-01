import React from 'react';
import ReactDOM from 'react-dom';

import Image from '.';

import LogoNovaWorld from 'assets/images/logo/nova-world-white.png';

describe('<Image />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image imgSrc={LogoNovaWorld} ratio="logo-novaworld" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
