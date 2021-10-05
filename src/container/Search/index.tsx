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
  pageData,
}) => {
  const { banner } = useMainLayout({ isHome: false, banners });
  const searchBlock = useMemo(() => getBlockData<SearchBlock>('section1', blocks), [blocks]);

  return (
    <>
      <HelmetComponent seoData={{ ...seoData, imgSrc: pageData?.image }} />
      <section className="s-banner">
        <Banner thumbnail={banner} layerDew={false} />
      </section>
      <section className="s-content s-wrap">
        <Content title={searchBlock?.title || ''} />
      </section>
    </>
  );
};

export default Search;
