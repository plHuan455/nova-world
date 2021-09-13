import React from 'react';
import ReactDOM from 'react-dom';

import ExperienceJourneyCard from '.';

describe('<ExperienceJourneyCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExperienceJourneyCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
