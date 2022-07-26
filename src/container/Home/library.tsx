import React, { useMemo } from 'react';

import LibraryHome from 'components/templates/LibraryHome';
import i18n from 'i18n';
import { useAppSelector } from 'store/hooks';
import { getImageURL, getLangURL } from 'utils/functions';
import { getSlugByTemplateCode } from 'utils/language';

type LibraryHomeProps = {
  data?: HomeBlockSection6;
}

const Library: React.FC<LibraryHomeProps> = ({
  data,
}) => {
  const baseSystem = useAppSelector((state) => state.systems.baseSystem?.staticPages.novaworld);
  const convertData = useMemo(() => {
    if (!data?.item) return [];

    return data.item.map((e, i) => ({
      id: i,
      title: e.title,
      thumbnail: getImageURL(e.image),
      alt: e.title,
      href: `${getLangURL(i18n.language)}/${getSlugByTemplateCode('library', baseSystem)}`,
    }));
  }, [data, baseSystem]);

  return (
    <LibraryHome
      title={data?.title || ''}
      data={convertData}
    />
  );
};

export default Library;
