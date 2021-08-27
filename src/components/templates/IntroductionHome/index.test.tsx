import React from 'react';
import ReactDOM from 'react-dom';

import IntroductionHome from '.';

describe('<IntroductionHome />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IntroductionHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
