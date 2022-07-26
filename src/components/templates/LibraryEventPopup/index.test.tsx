import React from 'react';
import ReactDOM from 'react-dom';

import LibraryEventPopup from '.';

describe('<LibraryEventPopup />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LibraryEventPopup
      isOpen
      // eslint-disable-next-line no-console
      handleClose={() => console.log('close')}
      eventData={null}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
