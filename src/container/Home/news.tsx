import React, { useMemo } from 'react';

import NewsHome from 'components/templates/NewsHome';
import useDidMount from 'hooks/useDidMount';
import { HomeBlock } from 'services/home/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getListCategoriesAsync } from 'store/news';

type NewsHomeContainerProps = {
  data?:HomeBlock;
}

const NewsHomeContainer: React.FC<NewsHomeContainerProps> = ({
  data,
}) => {
  const { news: { categories } } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useDidMount(() => {
    if (!categories) {
      dispatch(getListCategoriesAsync({}));
    }
  });

  const tabDataNewsHome = useMemo(() => {
    if (!categories || !categories.data) return [];
    return categories.data.map((item) => ({
      titleTab: item.name,
      dataNewsHome: [],
    }));
  }, [categories]);

  return (
    <NewsHome title={data?.title} tabDataNewsHome={tabDataNewsHome} />
  );
};

export default NewsHomeContainer;
