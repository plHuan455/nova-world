import React from 'react';
import ReactDOM from 'react-dom';

import LocationMap from '.';

import imgLocationCard from 'assets/images/habana.jpeg';

describe('<LocationMap />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocationMap data={{
      tropicana: {
        imgSrc: imgLocationCard, title: 'Novaworld Hồ Tràm - Morito', href: '',
      },
      habana: {
        imgSrc: imgLocationCard, title: 'Novaworld Hồ Tràm - Morito', href: '',
      },
      morito: {
        imgSrc: imgLocationCard, title: 'Novaworld Hồ Tràm - Morito', href: '',
      },
      wonderland: {
        imgSrc: imgLocationCard, title: 'Novaworld Hồ Tràm - Morito', href: '',
      },
    }}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
