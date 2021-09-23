import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/Search';

const Search: React.FC<BasePageData<SearchPage>> = (props) => (
  <div className="p-search">
    <MainLayout>
      <Screen {...props} />
    </MainLayout>
  </div>
);

export default Search;
