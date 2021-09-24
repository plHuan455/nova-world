import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';

import NewsHome, { NewsHomeTabProps } from 'components/templates/NewsHome';
import useDidMount from 'hooks/useDidMount';
import { getNewsListByCateService } from 'services/news';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getListCategoriesAsync } from 'store/news';
import { getImageURL } from 'utils/functions';

type NewsHomeContainerProps = {
  data?: HomeBlockSection7;
}

const LIMIT = 3;

const NewsHomeContainer: React.FC<NewsHomeContainerProps> = ({
  data,
}) => {
  const {
    news: { categories },
    menu: { prefix },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const firstCall = useRef(true);

  const [tabDataNewsHome, setTabDataNewsHome] = useState<NewsHomeTabProps[]>([]);
  const [indexActive, setIndexActive] = useState(0);
  const [loading, setLoading] = useState(false);

  useDidMount(() => {
    if (!categories) {
      dispatch(getListCategoriesAsync({}));
    }
  });

  useEffect(() => {
    if (categories && categories.data) {
      const dataTabs = categories.data.map((item) => ({
        titleTab: item.name,
        dataNewsHome: [],
        slug: item.slug,
      }));
      setTabDataNewsHome(dataTabs);
    }
  }, [categories]);

  const fetchNewsByCategories = useCallback(
    async (index:number) => {
      try {
        if (tabDataNewsHome && tabDataNewsHome[index]?.dataNewsHome.length > 0) {
          setIndexActive(index);
          return;
        }
        setLoading(true);
        const res = await getNewsListByCateService(tabDataNewsHome[index].slug, {
          limit: LIMIT,
          page: 1,
        });

        const listCard = res.data.map((card) => ({
          imgSrc: getImageURL(card.thumbnail),
          ratio: index === 0 ? '644x323' : '450x248' as Ratio,
          title: card.title,
          desc: card.description,
          updatedate: `Cập nhật lúc ${card.publishedAt}`,
          href: prefix?.newsDetail + card.slug,
        }));

        const newTabs = [...tabDataNewsHome].map((item, idx) => {
          if (index === idx) {
            return ({
              ...item,
              dataNewsHome: listCard,
            });
          }
          return item;
        });
        setTabDataNewsHome(newTabs);
        setIndexActive(index);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    },
    [prefix?.newsDetail, tabDataNewsHome],
  );

  useEffect(() => {
    if (tabDataNewsHome.length > 0 && firstCall.current) {
      firstCall.current = false;
      fetchNewsByCategories(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabDataNewsHome]);

  return (
    <NewsHome
      loading={loading}
      handleClickTabs={fetchNewsByCategories}
      indexActive={indexActive}
      title={data?.title}
      tabDataNewsHome={tabDataNewsHome}
    />
  );
};

export default NewsHomeContainer;
