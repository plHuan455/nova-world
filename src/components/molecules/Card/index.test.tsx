import React from 'react';
import ReactDOM from 'react-dom';

import Card from '.';

describe('<Card />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
