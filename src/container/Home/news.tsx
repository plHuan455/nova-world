import React from 'react';

import tabDataNewsHome from 'assets/dataDummy/newshome';
import NewsHome from 'components/templates/NewsHome';

const NewsHomeContainer: React.FC = () => (
  <NewsHome title="TIN TỨC" tabDataNewsHome={tabDataNewsHome} />
);

export default NewsHomeContainer;
