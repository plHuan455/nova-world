import React, { useMemo } from 'react';

import Content from './search';

import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useMainLayout from 'hooks/useMainLayout';
import { getBlockData } from 'utils/functions';

const Search: React.FC<BasePageData<SearchPage>> = ({
  banners,
  blocks,
  seoData,
}) => {
  const { banner } = useMainLayout({ type: 'another', banners });
  const { title } = useMemo(() => getBlockData('section1', blocks), [blocks]) as SearchBlock;

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section className="s-banner">
        <Banner thumbnail={banner} layerDew={false} />
      </section>
      <section className="s-content s-wrap">
        <Content title={title} />
      </section>
    </>
  );
};

export default Search;
