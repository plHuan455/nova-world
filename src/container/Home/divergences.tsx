import React, { useMemo } from 'react';

import Divergences from 'components/templates/Divergences';
import { HomeBlock } from 'services/home/types';
import { getImageURL } from 'utils/functions';

type DivergencesHomeProps = {
  data?:HomeBlock;
}

const DivergencesHome: React.FC<DivergencesHomeProps> = ({
  data,
}) => {
  const listCard = useMemo(() => {
    if (!data || !data.item) return [];
    return data.item.map((item, index) => ({
      srcLogo: undefined,
      title: item.title,
      numberPart: index + 1,
      numberTotal: data.item?.length || 0,
      description: item.description,
      link: item.link?.url,
      textLink: item.link?.text,
      target: item.link?.target,
      imgSrc: getImageURL(item.image),
    }));
  }, [data]);

  return (
    <Divergences
      title={data?.title}
      data={listCard}
    />
  );
};

export default DivergencesHome;
