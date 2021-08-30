import React from 'react';

import DivergencesHome from './divergences';
import Library from './library';
import Location from './location';
import NewsHomeContainer from './news';

import HomeBanner from 'assets/images/home-banner.jpg';
import Banner from 'components/organisms/Banner';
import MainLayout from 'components/templates/MainLayout';

const Home: React.FC = () => (
  <MainLayout isHome>
    <section className="s-banner">
      <Banner isHome thumbnail={HomeBanner} />
    </section>
    <section className="s-divergences">
      <DivergencesHome />
    </section>
    <section className="s-location">
      <Location />
    </section>
    <section className="s-library">
      <Library />
    </section>
    <section className="s-newshome">
      <NewsHomeContainer />
    </section>
    <div
      style={{
        height: '100vh',
        background: '#123485',
      }}
    />
    <div
      style={{
        height: '100vh',
        background: '#334524',
      }}
    />
  </MainLayout>
);

export default Home;
