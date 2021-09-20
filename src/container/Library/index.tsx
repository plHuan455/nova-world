import React from 'react';
import { useLocation } from 'react-router-dom';

import Content from './content';

import Banner from 'components/organisms/Banner';
import useMainLayout from 'hooks/useMainLayout';

const LibraryContainer: React.FC = () => {
  useMainLayout('another');
  const { state } = useLocation<{ id?: number }>();

  return (
    <>
      <section>
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="p-library_section s-wrap s-donut">
        <Content
          title="thư viện"
          activeTab={state?.id}
        />
      </section>
    </>
  );
};

export default LibraryContainer;
