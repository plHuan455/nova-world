import React from 'react';
import ReactDOM from 'react-dom';

import Divergences from '.';

describe('<Divergences />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Divergences />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
