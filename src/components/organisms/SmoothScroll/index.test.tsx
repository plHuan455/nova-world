import React from 'react';
import ReactDOM from 'react-dom';

import SmoothScroll from '.';

describe('<SmoothScroll />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmoothScroll />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
