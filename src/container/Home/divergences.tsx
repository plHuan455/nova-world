import React, { useMemo } from 'react';

import Divergences from 'components/templates/Divergences';
import { getImageURL } from 'utils/functions';

type DivergencesHomeProps = {
  data?: HomeBlockSection2;
}

const DivergencesHome: React.FC<DivergencesHomeProps> = ({
  data,
}) => {
  const listCard = useMemo(() => {
    if (!data || !data.item) return [];
    return data.item.map((item, index) => ({
      srcLogo: getImageURL(item.icon),
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
