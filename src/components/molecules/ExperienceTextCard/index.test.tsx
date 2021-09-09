import React from 'react';
import ReactDOM from 'react-dom';

import ExperienceTextCard from '.';

describe('<ExperienceTextCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExperienceTextCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
