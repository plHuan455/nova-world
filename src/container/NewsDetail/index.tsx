import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import Content from './content';
import Related from './related';

import BannerDetail from 'assets/images/banner_news.jpg';
import Loading from 'components/atoms/Loading';
import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useDidMount from 'hooks/useDidMount';
import useMainLayout from 'hooks/useMainLayout';
import usePreview from 'hooks/usePreview';
import i18n from 'i18n';
import getNewsDetail from 'services/newsDetail';
import { NewsDetailData } from 'services/newsDetail/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setPageTranslation } from 'store/locales';
import { getLangURL, getSlugByTemplateCode } from 'utils/language';

const NewsDetail: React.FC = () => {
  useMainLayout({ isHome: false });
  const { slug } = useParams<{slug?: string}>();
  const dispatch = useAppDispatch();
  const { status, data, error } = usePreview<NewsDetailData>(() => getNewsDetail(slug), [slug]);
  const baseSystem = useAppSelector((state) => state.systems.baseSystem?.staticPages.novaworld);

  useDidMount(() => {
    dispatch(setPageTranslation({
      isDetail: true,
    }));
  });

  if (status === 'pending') {
    return <Loading modifiers={['blue', 'page']} />;
  }

  if (error && baseSystem) {
    const err = Array.isArray(error) && error.length > 0
      ? error[0]
      : undefined;
    if (err?.code.toString() === '404') {
      return (
        <Redirect to={`${getLangURL(i18n.language)}/${getSlugByTemplateCode('page404', baseSystem)}`} />
      );
    }
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
