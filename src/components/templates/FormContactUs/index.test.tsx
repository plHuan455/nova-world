import React from 'react';
import ReactDOM from 'react-dom';

import FormContactUs from '.';

describe('<FormContactUs />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormContactUs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
