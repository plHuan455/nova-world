import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Content from './content';

import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useMainLayout from 'hooks/useMainLayout';
import { getBlockData } from 'utils/functions';

const LibraryContainer: React.FC<BasePageData<LibraryPage>> = ({
  banners,
  blocks,
  seoData,
}) => {
  const { banner } = useMainLayout({ type: 'another', banners });
  const { state } = useLocation<{ id?: number }>();

  const { title } = useMemo(() => getBlockData('section1', blocks), [blocks]) as LibraryBlock;

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section>
        <Banner thumbnail={banner} />
      </section>
      <section className="p-library_section s-wrap s-donut">
        <Content
          title={title}
          activeTab={state?.id}
        />
      </section>
    </>
  );
};

export default LibraryContainer;
