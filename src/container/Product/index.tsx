import React from 'react';

import Product from './product';
import Related from './related';

import Banner from 'components/organisms/Banner';
import useMainLayout from 'hooks/useMainLayout';

const Screen: React.FC = () => {
  useMainLayout({ isHome: false });
  return (
    <>
      <section className="s-banner">
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="s-content">
        <Product />
        <Related />
      </section>
    </>
  );
};

export default Screen;
