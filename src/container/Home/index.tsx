import React from 'react';

import HomeBanner from 'assets/images/banners/banner_home.png';
import Banner from 'components/organisms/Banner';
import useMainLayout from 'hooks/useMainLayout';

const DivergencesHome = React.lazy(() => import('./divergences'));
const ExperienceJourneyHome = React.lazy(() => import('./experiencejourney'));
const FeaturedProductHome = React.lazy(() => import('./featuredproduct'));
const Introduction = React.lazy(() => import('./introduction'));
const Library = React.lazy(() => import('./library'));
const Location = React.lazy(() => import('./location'));
const NewsHomeContainer = React.lazy(() => import('./news'));

const Home: React.FC = () => {
  useMainLayout('home');
  return (
    <>
      <section className="s-banner">
        <Banner isHomePage videoSrc="https://www.youtube.com/watch?v=Ktm_JYmOeOc" thumbnail={HomeBanner} />
      </section>
      <section className="s-introduction">
        <Introduction />
      </section>
      <section className="s-divergences">
        <DivergencesHome />
      </section>
      <section className="s-location">
        <Location />
      </section>
      <section className="t-featured">
        <FeaturedProductHome />
      </section>
      <section className="s-experience">
        <ExperienceJourneyHome />
      </section>
      <section className="s-library">
        <Library />
      </section>
      <section className="s-news">
        <NewsHomeContainer />
      </section>
    </>
  );
};

export default Home;
