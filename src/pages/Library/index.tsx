import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/Library';

const Library: React.FC<BasePageData<LibraryPage>> = (props) => (
  <div className="p-library">
    <MainLayout>
      <Screen {...props} />
    </MainLayout>
  </div>
);

export default Library;
