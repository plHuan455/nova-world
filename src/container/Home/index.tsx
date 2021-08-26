import React from 'react';

import HomeBanner from 'assets/images/home-banner.jpg';
import Banner from 'components/organisms/Banner';
import MainLayout from 'components/templates/MainLayout';

const Home: React.FC = () => (
  <MainLayout isHome>
    <section className="s-banner">
      <Banner isHome thumbnail={HomeBanner} />
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
