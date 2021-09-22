import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Content from './content';

import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useBanner from 'hooks/useBanner';
import useMainLayout from 'hooks/useMainLayout';
import { getBlockData } from 'utils/functions';

const LibraryContainer: React.FC<BasePageData<LibraryPage>> = ({
  banners,
  blocks,
  seoData,
}) => {
  useMainLayout('another');
  const thumbnail = useBanner(banners);
  const { state } = useLocation<{ id?: number }>();

  const { title } = useMemo(() => getBlockData('section1', blocks), [blocks]) as LibraryBlock;

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section>
        <Banner thumbnail={thumbnail} />
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
