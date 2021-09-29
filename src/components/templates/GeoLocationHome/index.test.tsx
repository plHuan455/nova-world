import React from 'react';
import ReactDOM from 'react-dom';

import GeoLocationHome from '.';

describe('<GeoLocationHome />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GeoLocationHome
      title=""
      item={[]}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
