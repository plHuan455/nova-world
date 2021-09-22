import React from 'react';

import Screen from 'container/Search';

const Search: React.FC<BasePageData<SearchPage>> = (props) => (
  <div className="p-search">
    <Screen {...props} />
  </div>
);

export default Search;
