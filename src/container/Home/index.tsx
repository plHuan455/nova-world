import React from 'react';

import DivergencesHome from './divergences';
import ExperienceJourneyHome from './experiencejourney';
import FeaturedProductHome from './featuredproduct';
import Introduction from './introduction';
import Library from './library';
import Location from './location';
import NewsHomeContainer from './news';

import HomeBanner from 'assets/images/banners/banner_home.png';
import Banner from 'components/organisms/Banner';
import useMainLayout from 'hooks/useMainLayout';

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
