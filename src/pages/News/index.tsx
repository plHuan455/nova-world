import React from 'react';

import NewsContainer from 'container/News';

const NewsPage: React.FC<BasePageData<NewsPage>> = (props) => (
  <div className="p-news">
    <NewsContainer {...props} />
  </div>
);

export default NewsPage;
