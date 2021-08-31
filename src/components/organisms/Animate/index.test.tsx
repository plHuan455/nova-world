import React from 'react';
import ReactDOM from 'react-dom';

import Animate from '.';

describe('<Animate />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Animate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
