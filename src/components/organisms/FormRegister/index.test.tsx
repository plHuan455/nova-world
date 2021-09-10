import React from 'react';
import ReactDOM from 'react-dom';

import FormRegister from '.';

describe('<FormRegister />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormRegister />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
