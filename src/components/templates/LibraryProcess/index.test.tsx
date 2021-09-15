import React from 'react';
import ReactDOM from 'react-dom';

import LibraryProcess from '.';

describe('<LibraryProcess />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LibraryProcess />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
