import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/NewsDetail';

const NewsDetail: React.FC = () => (
  <div className="p-newsdetail">
    <MainLayout>
      <Screen />
    </MainLayout>
  </div>
);

export default NewsDetail;
