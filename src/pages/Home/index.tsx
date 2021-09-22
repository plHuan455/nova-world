import React from 'react';

import Screen from 'container/Home';
import { HomeBlock } from 'services/home/types';

const Home: React.FC<BasePageData<HomeBlock>> = (props) => (
  <div className="p-home">
    <Screen {...props} />
  </div>
);

export default Home;
