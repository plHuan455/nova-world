import React from 'react';
import ReactDOM from 'react-dom';

import LocationMap from '.';

describe('<LocationMap />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocationMap item={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
