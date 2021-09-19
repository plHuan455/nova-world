import React from 'react';
import ReactDOM from 'react-dom';

import LibraryEvents from '.';

describe('<LibraryEvents />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LibraryEvents listEvent={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
