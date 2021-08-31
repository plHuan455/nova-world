import React from 'react';
import ReactDOM from 'react-dom';

import Player from '.';

describe('<Player />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Player ratio="1366x768" videoSrc="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
