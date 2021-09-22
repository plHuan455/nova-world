import React from 'react';

import libraryDummy from 'assets/dataDummy/library';
import LibraryHome from 'components/templates/LibraryHome';
import { HomeBlock } from 'services/home/types';

type LibraryHomeProps = {
  data?:HomeBlock;
}

const Library: React.FC<LibraryHomeProps> = ({
  data,
}) => (
  <LibraryHome
    title={data?.title}
    data={libraryDummy.card}
  />
);

export default Library;
