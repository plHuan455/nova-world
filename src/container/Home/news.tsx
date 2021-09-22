import React, { useMemo } from 'react';

import NewsHome from 'components/templates/NewsHome';
import useDidMount from 'hooks/useDidMount';
import { HomeBlock } from 'services/home/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getListCategoriesAsync } from 'store/news';
import { getImageURL } from 'utils/functions';

type NewsHomeContainerProps = {
  data?:HomeBlock;
}

const NewsHomeContainer: React.FC<NewsHomeContainerProps> = ({
  data,
}) => {
  const {
    news: { categories },
    menu: { prefix },
  } = useAppSelector((state) => state);

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
      // eslint-disable-next-line no-unused-vars
      dataNewsHome: (item?.newsList || []).slice(0, 3).map((card, index) => ({
        imgSrc: getImageURL(card.thumbnail),
        ratio: index === 0 ? '644x323' : '450x248' as Ratio,
        title: card.title,
        desc: card.description,
        updatedate: `Cập nhật lúc ${card.publishedAt}`,
        href: prefix?.newsDetail + card.slug,
      })),
    }));
  }, [categories, prefix?.newsDetail]);

  return (
    <NewsHome title={data?.title} tabDataNewsHome={tabDataNewsHome} />
  );
};

export default NewsHomeContainer;
