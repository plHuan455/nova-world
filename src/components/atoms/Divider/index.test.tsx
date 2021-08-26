import React from 'react';
import ReactDOM from 'react-dom';

import Divider from '.';

describe('<Divider />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Divider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
