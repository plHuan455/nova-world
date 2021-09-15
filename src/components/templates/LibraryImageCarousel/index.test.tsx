import React from 'react';
import ReactDOM from 'react-dom';

import LibraryImageCarousel from '.';

describe('<LibraryImageCarousel />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LibraryImageCarousel imageList={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
