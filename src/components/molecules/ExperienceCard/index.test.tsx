import React from 'react';
import ReactDOM from 'react-dom';

import ExperienceCard from '.';

describe('<ExperienceCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExperienceCard href="" imgSrc="" title="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
