import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Link from '.';

describe('<Link />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Link href="/" />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
