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
  pageData,
}) => {
  const { banner } = useMainLayout({ isHome: true, banners });

  const video = useMemo(() => getBlockData<HomeBlockBanner>('banner', blocks), [blocks]);

  return (
    <>
      <HelmetComponent seoData={{ ...seoData, imgSrc: pageData?.image }} />
      <section className="s-banner">
        <Banner isHomePage videoSrc={video?.videoLink} thumbnail={banner} />
      </section>
      <section className="s-introduction">
        <Introduction
          data={getBlockData<HomeBlockSection1>('section1', blocks)}
        />
      </section>
      <section className="s-divergences">
        <DivergencesHome
          data={getBlockData<HomeBlockSection2>('section2', blocks)}
        />
      </section>
      <section className="s-location">
        <Location
          data={getBlockData<HomeBlockSection3>('section3', blocks)}
        />
      </section>
      <section className="t-featured">
        {/* TODO: Missing data (api product) */}
        <FeaturedProductHome
          data={getBlockData<HomeBlockSection4>('section4', blocks)}
        />
      </section>
      <section className="s-experience">
        <ExperienceJourneyHome
          data={getBlockData<HomeBlockSection5>('section5', blocks)}
        />
      </section>
      <section className="s-library">
        <Library
          data={getBlockData<HomeBlockSection6>('section6', blocks)}
        />
      </section>
      <section className="s-news">
        <NewsHomeContainer
          data={getBlockData<HomeBlockSection7>('section7', blocks)}
        />
      </section>
    </>
  );
};

export default Home;
