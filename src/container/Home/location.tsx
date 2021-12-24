import React, { useMemo } from 'react';

import GeoLocationHome from 'components/templates/GeoLocationHome';
import { getImageURL } from 'utils/functions';

type LocationProps = {
  data?: HomeBlockSection3;
}

const Location:React.FC<LocationProps> = ({
  data,
}) => {
  const convertData = useMemo(() => {
    if (!data?.item.length) return [];

    return data.item.map((e) => ({
      ...e,
      thumbnail: getImageURL(e.logo),
    }));
  }, [data]);

  return (
    <GeoLocationHome
      item={convertData}
      title={data?.title}
      desc={data?.description}
    />
  );
};

export default Location;
