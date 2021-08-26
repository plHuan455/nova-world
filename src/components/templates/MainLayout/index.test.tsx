import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from '.';

describe('<MainLayout />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainLayout />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
