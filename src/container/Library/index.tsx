import React from 'react';
import { useHistory } from 'react-router-dom';

import imageLibraryData, { cateList, tagsList } from 'assets/dataDummy/imageLibrary';
import Banner from 'components/organisms/Banner';
import LibraryList from 'components/templates/LibraryList';
import useMainLayout from 'hooks/useMainLayout';

const LibraryContainer: React.FC = () => {
  const history = useHistory();
  useMainLayout('another');
  return (
    <>
      <section>
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="p-library_list-section s-wrap s-donut">
        <LibraryList
          cateList={cateList}
          tagsList={tagsList}
          listImages={imageLibraryData}
          handleClickImage={(idx) => history.push({
            pathname: '/thu-vien-hinh-anh',
            state: { index: idx },
          })}
          handleShowMore={() => console.log('show more')}
          handleClickTabPanel={(idx) => console.log(idx)}
        />
      </section>
    </>
  );
};

export default LibraryContainer;
