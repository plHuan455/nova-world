import React from 'react';

import tabDataNewsHome from 'assets/dataDummy/newshome';
import NewsHome from 'components/templates/NewsHome';
import { HomeBlock } from 'services/home/types';

type NewsHomeContainerProps = {
  data?:HomeBlock;
}

const NewsHomeContainer: React.FC<NewsHomeContainerProps> = ({
  data,
}) => (
  <NewsHome title={data?.title} tabDataNewsHome={tabDataNewsHome} />
);

export default NewsHomeContainer;
