import React from 'react';
import ReactDOM from 'react-dom';

import LibraryHome from '.';

describe('<LibraryHome />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LibraryHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
