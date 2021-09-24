import React, { useMemo } from 'react';

import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useMainLayout from 'hooks/useMainLayout';
import { getBlockData } from 'utils/functions';

const DivergencesHome = React.lazy(() => import('./divergences'));
const ExperienceJourneyHome = React.lazy(() => import('./experiencejourney'));
const FeaturedProductHome = React.lazy(() => import('./featuredproduct'));
const Introduction = React.lazy(() => import('./introduction'));
const Library = React.lazy(() => import('./library'));
const Location = React.lazy(() => import('./location'));
const NewsHomeContainer = React.lazy(() => import('./news'));

const Home: React.FC<BasePageData<HomePage>> = ({
  blocks,
  seoData,
  banners,
}) => {
  const { banner } = useMainLayout({ isHome: true, banners });

  const { videoLink } = useMemo(() => getBlockData('banner', blocks), [blocks]) as HomeBlockBanner;

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section className="s-banner">
        <Banner isHomePage videoSrc={videoLink} thumbnail={banner} />
      </section>
      <section className="s-introduction">
        <Introduction
          data={getBlockData('section1', blocks) as HomeBlockSection1}
        />
      </section>
      <section className="s-divergences">
        <DivergencesHome
          data={getBlockData('section2', blocks) as HomeBlockSection2}
        />
      </section>
      <section className="s-location">
        <Location
          data={getBlockData('section3', blocks) as HomeBlockSection3}
        />
      </section>
      <section className="t-featured">
        {/* TODO: Missing data (api product) */}
        <FeaturedProductHome
          data={getBlockData('section4', blocks) as HomeBlockSection4}
        />
      </section>
      <section className="s-experience">
        <ExperienceJourneyHome
          data={getBlockData('section5', blocks) as HomeBlockSection5}
        />
      </section>
      <section className="s-library">
        <Library
          data={getBlockData('section6', blocks) as HomeBlockSection6}
        />
      </section>
      <section className="s-news">
        <NewsHomeContainer
          data={getBlockData('section7', blocks) as HomeBlockSection7}
        />
      </section>
    </>
  );
};

export default Home;
