import React from 'react';
import { useParams } from 'react-router-dom';

import Content from './content';
import Related from './related';

import BannerDetail from 'assets/images/banner_news.jpg';
import Loading from 'components/atoms/Loading';
import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useCallService from 'hooks/useCallService';
import useMainLayout from 'hooks/useMainLayout';
import getNewsDetail from 'services/newsDetail';

const NewsDetail: React.FC = () => {
  useMainLayout({ type: 'another' });
  const { slug } = useParams<{slug?: string}>();

  const { status, data } = useCallService(() => getNewsDetail(slug), [slug]);

  if (status === 'pending') {
    return <Loading modifiers={['blue']} />;
  }

  return (
    <>
      <HelmetComponent seoData={data?.seoData} />
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
