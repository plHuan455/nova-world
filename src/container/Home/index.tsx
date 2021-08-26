import React from 'react';

import MainLayout from 'components/templates/MainLayout';

const Home: React.FC = () => (
  <MainLayout isHome>
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
