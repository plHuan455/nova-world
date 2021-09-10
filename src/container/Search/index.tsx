import React from 'react';

import Content from './search';

import Banner from 'components/organisms/Banner';
import useMainLayout from 'hooks/useMainLayout';

const Search: React.FC = () => {
  useMainLayout('another');

  return (
    <>
      <section className="s-banner">
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="s-content">
        <Content />
      </section>
    </>
  );
};

export default Search;
