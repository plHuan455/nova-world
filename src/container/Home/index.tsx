import React from 'react';

import Library from './library';

import HomeBanner from 'assets/images/home-banner.jpg';
import Banner from 'components/organisms/Banner';
import MainLayout from 'components/templates/MainLayout';

const Home: React.FC = () => (
  <MainLayout isHome>
    <section className="s-banner">
      <Banner isHome thumbnail={HomeBanner} />
    </section>
    <section className="s-library">
      <Library />
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
