import React, {
  useEffect, useMemo, useState,
} from 'react';

import { CardProps } from 'components/molecules/Card';
import Banner from 'components/organisms/Banner';
import NewsList, { ListPanelType } from 'components/templates/NewsList';
import HelmetComponent from 'container/MainLayout/helmet';
import useIsMounted from 'hooks/useIsMounted';
import useMainLayout from 'hooks/useMainLayout';
import {
  getNewsCategoriesService,
  getNewsListByCateService,
} from 'services/news';
import { CategoriesData, NewsData } from 'services/news/types';
import { getBlockData, getImageURL } from 'utils/functions';

const LIMIT = 3;

const NewsContainer: React.FC<BasePageData<NewsPage>> = ({
  banners,
  blocks,
  seoData,
}) => {
  const { banner } = useMainLayout({ type: 'another', banners });
  const isMounted = useIsMounted();

  const { title } = useMemo(() => getBlockData('section1', blocks), [blocks]) as NewsBlock;

  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [cateList, setCateList] = useState<CategoriesData[]>([]);
  const [panelList, setPanelList] = useState<ListPanelType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [tabActive, setTabActive] = useState<number>(0);

  const convertCateList = useMemo(() => {
    if (!cateList?.length) return [];

    return cateList.map((item, idx) => ({
      id: idx,
      label: item.name,
      slug: item.slug,
    }));
  }, [cateList]);

  const convertNewsList = (list: NewsData[]) => list.map((item, idx) => ({
    id: idx,
    imgSrc: getImageURL(item.thumbnail),
    title: item.title,
    description: item.description,
    href: item.slug,
  }));

  const convertPanelList = (
    _cateList: CategoriesData[],
    _newsList: CardProps[],
  ): ListPanelType[] => _cateList.map((_, idx) => ({
    id: idx,
    listNews: _newsList,
  }));

  const handleClickTab = async (tabIdx: number) => {
    try {
      if (isMounted()) setLoading(true);
      const { data, meta } = await getNewsListByCateService(cateList[tabIdx].slug, {
        limit: LIMIT,
        page: 1,
      });

      const panelData = convertPanelList(cateList, convertNewsList(data));
      if (isMounted()) setPanelList(panelData);
      if (isMounted()) setTabActive(tabIdx);
      if (isMounted()) setTotalPage(meta.totalPages);
      if (isMounted()) setPage(1);
    } catch {
      // empty
    } finally {
      if (isMounted()) setLoading(false);
    }
  };

  const handleShowMore = async () => {
    if (totalPage > page) {
      if (isMounted()) setLoadingBtn(true);
      const increasePage = page + 1;
      const currentTabSlug = cateList[tabActive].slug;
      const { data, meta } = await getNewsListByCateService(
        currentTabSlug,
        {
          limit: LIMIT,
          page: increasePage,
        },
      );
      const newsListConcat = panelList[tabActive].listNews.concat(convertNewsList(data));
      if (isMounted()) setPanelList(convertPanelList(cateList, newsListConcat));
      if (isMounted()) setTotalPage(meta.totalPages);
      if (isMounted()) setPage(increasePage);
      if (isMounted()) setLoadingBtn(false);
    } else {
      const newsListConcat = panelList[tabActive].listNews.slice(0, LIMIT);
      if (isMounted()) setPanelList(convertPanelList(cateList, newsListConcat));
      if (isMounted()) setPage(1);
    }
  };

  const initPage = async () => {
    try {
      if (isMounted()) setLoading(true);
      const cateData = await getNewsCategoriesService();
      const newsData = await getNewsListByCateService(cateData.data[0].slug, {
        limit: LIMIT,
        page: 1,
      });
      const panelData = convertPanelList(cateData.data, convertNewsList(newsData.data));
      if (isMounted()) setCateList(cateData.data);
      if (isMounted()) setPanelList(panelData);
      if (isMounted()) setTotalPage(newsData.meta.totalPages);
    } catch {
      // empty
    } finally {
      if (isMounted()) setLoading(false);
    }
  };

  useEffect(() => {
    initPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section>
        <Banner thumbnail={banner} />
      </section>
      <section className="p-news_list-section s-wrap s-donut">
        <NewsList
          title={title}
          handleShowMore={handleShowMore}
          totalPage={totalPage}
          page={page}
          fetching={loading}
          loadingBtn={loadingBtn}
          handleClickTab={(idx) => handleClickTab(idx)}
          tabActive={tabActive}
          listLabel={convertCateList}
          listPanel={panelList}
        />
      </section>
    </>
  );
};

export default NewsContainer;
