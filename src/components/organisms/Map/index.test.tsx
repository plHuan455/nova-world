import React from 'react';
import ReactDOM from 'react-dom';

import Map from '.';

describe('<Map />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Map mapAPIkey="AIzaSyAt4eV8aoSdhKXHQSQvJc7aSEGlcnUVbdo" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
