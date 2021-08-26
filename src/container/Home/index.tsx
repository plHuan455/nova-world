import React from 'react';

import MainLayout from 'components/templates/MainLayout';

const Home: React.FC = () => (
  <MainLayout>
    <div
      style={{
        height: '50vh',
        background: 'yellow',
      }}
    />
    <div
      style={{
        height: '50vh',
        background: '#123485',
      }}
    />
    <div
      style={{
        height: '50vh',
        background: '#334524',
      }}
    />
  </MainLayout>
);

export default Home;
