import React from 'react';
import ReactDOM from 'react-dom';

import LibraryList from '.';

describe('<LibraryList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LibraryList cateList={[]} listData={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
