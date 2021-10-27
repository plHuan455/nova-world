import React from 'react';

import Content from './search';

import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useMainLayout from 'hooks/useMainLayout';

const Search: React.FC<BasePageData<SearchPage>> = (props) => {
  const { seoData } = props;
  const { pageData } = props;

  const { banners } = props;
  const { banner } = useMainLayout({ isHome: false, banners });

  console.log(pageData);

  return (
    <>
      <HelmetComponent seoData={{ ...seoData, imgSrc: pageData?.image }} />
      <section className="s-banner">
        <Banner thumbnail={banner} layerDew={false} />
      </section>
      <section className="s-content s-wrap">
        <Content {...props} />
      </section>
    </>
  );
};

export default Search;
