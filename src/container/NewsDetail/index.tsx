import React from 'react';
import { useParams } from 'react-router-dom';

import Content from './content';
import Related from './related';

import BannerDetail from 'assets/images/banner_news.jpg';
import Loading from 'components/atoms/Loading';
import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useDidMount from 'hooks/useDidMount';
import useMainLayout from 'hooks/useMainLayout';
import usePreview from 'hooks/usePreview';
import getNewsDetail from 'services/newsDetail';
import { NewsDetailData } from 'services/newsDetail/types';
import { useAppDispatch } from 'store/hooks';
import { setPageTranslation } from 'store/locales';

const NewsDetail: React.FC = () => {
  useMainLayout({ isHome: false });
  const { slug } = useParams<{slug?: string}>();
  const dispatch = useAppDispatch();
  const { status, data } = usePreview<NewsDetailData>(() => getNewsDetail(slug), [slug]);

  useDidMount(() => {
    dispatch(setPageTranslation({
      isDetail: true,
    }));
  });

  if (status === 'pending') {
    return <Loading modifiers={['blue', 'page']} />;
  }

  return (
    <>
      <HelmetComponent seoData={{ ...(data?.seoData || {}), imgSrc: data?.newsData?.thumbnail }} />
      <section className="s-banner">
        <Banner thumbnail={BannerDetail} />
      </section>
      <section className="s-wrap s-donut">
        <Content breadcrumb={data?.breadcrumbs[0]} newsData={data?.newsData} />
        <Related data={data?.relatedNews} />
      </section>
    </>
  );
};

export default NewsDetail;
