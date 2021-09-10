import React from 'react';
import ReactDOM from 'react-dom';

import GeoLocationHome from '.';

describe('<GeoLocationHome />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GeoLocationHome
      title=""
      data={{
        tropicana: {
          imgSrc: '', title: 'Novaworld Hồ Tràm - Morito', href: '',
        },
        habana: {
          imgSrc: '', title: 'Novaworld Hồ Tràm - Morito', href: '',
        },
        morito: {
          imgSrc: '', title: 'Novaworld Hồ Tràm - Morito', href: '',
        },
        wonderland: {
          imgSrc: '', title: 'Novaworld Hồ Tràm - Morito', href: '',
        },
      }}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
