import React from 'react';
import ReactDOM from 'react-dom';

import NewsCard from '.';

describe('<NewsCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsCard title="" imgSrc="" ratio="logo-novaworld" href="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
