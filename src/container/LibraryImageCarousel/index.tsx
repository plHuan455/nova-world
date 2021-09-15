import React from 'react';

import imageLibraryData from 'assets/dataDummy/imageLibrary';
import Banner from 'components/organisms/Banner';
import LibraryImageCarousel from 'components/templates/LibraryImageCarousel';
import useMainLayout from 'hooks/useMainLayout';

const LibraryImageCarouselContainer: React.FC = () => {
  useMainLayout('another');

  return (
    <>
      <section>
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="p-library-carousel_list-section s-wrap s-donut">
        <LibraryImageCarousel imageList={imageLibraryData} />
      </section>
    </>
  );
};

export default LibraryImageCarouselContainer;
