import React from 'react';
import ReactDOM from 'react-dom';

import ExperienceCard from '.';

describe('<ExperienceCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExperienceCard item={[
      {
        title: 'Vui chơi giải trí',
        subTitle: 'Novaworld Ho Tram Wonderland',
        stt: 1,
        imgSrc: '',
        alt: '',
        href: '',
      },
    ]}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
