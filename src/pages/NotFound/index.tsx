import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/NotFound';

const NotFound: React.FC<BasePageData<NotFoundPage>> = (props) => (
  <div className="p-notfound">
    <MainLayout>
      <Screen {...props} />
    </MainLayout>
  </div>
);

export default NotFound;
