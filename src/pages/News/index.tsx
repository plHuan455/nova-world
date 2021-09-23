import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import NewsContainer from 'container/News';

const NewsPage: React.FC<BasePageData<NewsPage>> = (props) => (
  <div className="p-news">
    <MainLayout>
      <NewsContainer {...props} />
    </MainLayout>
  </div>
);

export default NewsPage;
