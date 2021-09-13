import React, { useEffect, useState } from 'react';

// import { listPanel } from 'assets/dataDummy/newsList';
import { CardProps } from 'components/molecules/Card';
import Banner from 'components/organisms/Banner';
import NewsList, { ListPanelType } from 'components/templates/NewsList';
import useMainLayout from 'hooks/useMainLayout';
import {
  getNewsCategoriesService,
  getNewsListByCateService,
} from 'services/News';
import { CategoriesData, NewsData } from 'services/News/type';
import { getImageURL } from 'utils/functions';

const LIMIT = 3;
const NewsContainer: React.FC = () => {
  useMainLayout('another');
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [cateList, setCateList] = useState<CategoriesData[]>([]);
  const [panelList, setPanelList] = useState<ListPanelType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [tabActive, setTabActive] = useState<number>(0);

  const convertCateList = (list: CategoriesData[]) => list.map((item, idx) => ({
    id: idx,
    label: item.name,
    slug: item.slug,
  }));

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
  ): ListPanelType[] => _cateList.map((item, idx) => ({
    id: idx,
    listNews: _newsList,
  }));

  const handleClickTab = async (tabIdx: number) => {
    try {
      setLoading(true);
      const { data, meta } = await getNewsListByCateService(cateList[tabIdx].slug, {
        limit: LIMIT,
        page: 1,
      });
      const panelData = convertPanelList(cateList, convertNewsList(data));
      setPanelList(panelData);
      setTabActive(tabIdx);
      setTotalPage(meta.totalPages);
      setPage(1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = async () => {
    if (totalPage > page) {
      setLoadingBtn(true);
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
      setPanelList(convertPanelList(cateList, newsListConcat));
      setTotalPage(meta.totalPages);
      setPage(increasePage);
      setLoadingBtn(false);
    } else {
      const newsListConcat = panelList[tabActive].listNews.slice(0, LIMIT);
      setPanelList(convertPanelList(cateList, newsListConcat));
      setPage(1);
    }
  };
  const initPage = async () => {
    try {
      setLoading(true);
      const cateData = await getNewsCategoriesService();
      const newsData = await getNewsListByCateService(cateData.data[0].slug, {
        limit: LIMIT,
        page: 1,
      });
      const panelData = convertPanelList(cateData.data, convertNewsList(newsData.data));
      setCateList(cateData.data);
      setPanelList(panelData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    initPage();
  }, []);
  return (
    <>
      <section>
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="p-news_list-section s-wrap s-donut">
        <NewsList
          title="Tin tức"
          handleShowMore={handleShowMore}
          totalPage={totalPage}
          page={page}
          fetching={loading}
          loadingBtn={loadingBtn}
          handleClickTab={(idx) => handleClickTab(idx)}
          tabActive={tabActive}
          listLabel={convertCateList(cateList)}
          listPanel={panelList}
        />
      </section>
    </>
  );
};

export default NewsContainer;
