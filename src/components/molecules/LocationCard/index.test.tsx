import React from 'react';
import ReactDOM from 'react-dom';

import LocationCard from '.';

describe('<LocationCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocationCard imgSrc="" title="" href="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
