import React from 'react';
import ReactDOM from 'react-dom';

import ExperienceJourney from '.';

describe('<ExperienceJourney />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExperienceJourney title="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
