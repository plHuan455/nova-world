import React from 'react';
import ReactDOM from 'react-dom';

import LibraryImage from '.';

describe('<LibraryImage />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LibraryImage listImages={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
