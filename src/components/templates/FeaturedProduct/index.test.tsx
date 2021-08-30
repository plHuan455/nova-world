import React from 'react';
import ReactDOM from 'react-dom';

import FeaturedProduct from '.';

describe('<FeaturedProduct />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeaturedProduct data={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
