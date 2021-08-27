import React from 'react';

import libraryDummy from 'assets/dataDummy/library';
import LibraryHome from 'components/templates/LibraryHome';

const Library: React.FC = () => (
  <LibraryHome data={libraryDummy.card} />
);

export default Library;
