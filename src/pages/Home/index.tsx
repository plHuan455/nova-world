import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/Home';
import { HomeBlock } from 'services/home/types';

const Home: React.FC<BasePageData<HomeBlock>> = (props) => (
  <div className="p-home">
    <MainLayout>
      <Screen {...props} />
    </MainLayout>
  </div>
);

export default Home;
