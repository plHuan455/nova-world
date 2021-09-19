import React, { useMemo } from 'react';

import Loading from 'components/atoms/Loading';
import LibraryProcess, { LibraryProcessListTypes } from 'components/templates/LibraryProcess';
import useCallService from 'hooks/useCallService';
import getProcessesService from 'services/processes';
import { getImageURL } from 'utils/functions';

const Process: React.FC = () => {
  const { data, status } = useCallService(() => getProcessesService(), []);

  const processList = useMemo((): LibraryProcessListTypes[] => {
    if (!data?.length) return [];
    return data.map((e) => ({
      state: e.title,
      desc: e.description,
      videoThumbnail: getImageURL(e.translation.mediaThumb),
      videoSrc: e.media,
    }));
  }, [data]);

  if (status === 'pending') {
    return (
      <div className="p-library_loading">
        <Loading modifiers={['blue']} />
      </div>
    );
  }

  return (
    <LibraryProcess processList={processList} />
  );
};

export default Process;
