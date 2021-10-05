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
  pageData,
}) => {
  const { banner } = useMainLayout({ isHome: false, banners });
  const { state } = useLocation<{ id?: number }>();

  const blockLibrary = useMemo(() => getBlockData<LibraryBlock>('section1', blocks), [blocks]);

  return (
    <>
      <HelmetComponent seoData={{ ...seoData, imgSrc: pageData?.image }} />
      <section>
        <Banner thumbnail={banner} />
      </section>
      <section className="p-library_section s-wrap s-donut">
        <Content
          title={blockLibrary?.title}
          activeTab={state?.id}
          listLabel={blockLibrary?.tab}
        />
      </section>
    </>
  );
};

export default LibraryContainer;
