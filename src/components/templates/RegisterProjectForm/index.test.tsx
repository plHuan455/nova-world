import React from 'react';
import ReactDOM from 'react-dom';

import RegisterProjectForm from '.';

describe('<RegisterProjectForm />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegisterProjectForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
