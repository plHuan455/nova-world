import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from '.';

describe('<Textarea />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Textarea />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
