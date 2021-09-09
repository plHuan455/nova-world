import React from 'react';
import ReactDOM from 'react-dom';

import Tag from '.';

describe('<Tag />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tag>Example</Tag>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
