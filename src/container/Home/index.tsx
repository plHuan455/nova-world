import React from 'react';

import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useBannerResize from 'hooks/useBannerResize';
import useMainLayout from 'hooks/useMainLayout';
import { HomeBlock } from 'services/home/types';
import { getBlockData } from 'utils/functions';

const DivergencesHome = React.lazy(() => import('./divergences'));
const ExperienceJourneyHome = React.lazy(() => import('./experiencejourney'));
const FeaturedProductHome = React.lazy(() => import('./featuredproduct'));
const Introduction = React.lazy(() => import('./introduction'));
const Library = React.lazy(() => import('./library'));
const Location = React.lazy(() => import('./location'));
const NewsHomeContainer = React.lazy(() => import('./news'));

const Home: React.FC<BasePageData<HomeBlock>> = ({
  blocks,
  // pageData,
  seoData,
  banners,
}) => {
  useMainLayout({ type: 'home' });
  const infoBanner = useBannerResize(banners);

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section className="s-banner">
        <Banner isHomePage videoSrc="https://www.youtube.com/watch?v=Ktm_JYmOeOc" thumbnail={infoBanner?.image || ''} />
      </section>
      <section className="s-introduction">
        <Introduction
          data={getBlockData('section1', blocks)}
        />
      </section>
      <section className="s-divergences">
        <DivergencesHome
          data={getBlockData('section2', blocks)}
        />
      </section>
      <section className="s-location">
        <Location
          data={getBlockData('section3', blocks)}
        />
      </section>
      <section className="t-featured">
        <FeaturedProductHome
          data={getBlockData('section4', blocks)}
        />
      </section>
      <section className="s-experience">
        <ExperienceJourneyHome
          data={getBlockData('section5', blocks)}
        />
      </section>
      <section className="s-library">
        <Library
          data={getBlockData('section6', blocks)}
        />
      </section>
      <section className="s-news">
        <NewsHomeContainer
          data={getBlockData('section7', blocks)}
        />
      </section>
    </>
  );
};

export default Home;
