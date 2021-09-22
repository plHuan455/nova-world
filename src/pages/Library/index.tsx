import React from 'react';

import Screen from 'container/Library';

const Library: React.FC<BasePageData<LibraryPage>> = (props) => (
  <div className="p-library">
    <Screen {...props} />
  </div>
);

export default Library;
