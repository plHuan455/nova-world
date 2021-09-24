import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/Home';

const Home: React.FC<BasePageData<HomePage>> = (props) => (
  <div className="p-home">
    <MainLayout>
      <Screen {...props} />
    </MainLayout>
  </div>
);

export default Home;
