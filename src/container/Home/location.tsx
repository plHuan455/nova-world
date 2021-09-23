import React from 'react';

import dataLocation from 'assets/dataDummy/location';
import GeoLocationHome from 'components/templates/GeoLocationHome';
import { HomeBlock } from 'services/home/types';

type LocationProps = {
  data?:HomeBlock;
}

const Location:React.FC<LocationProps> = ({
  data,
}) => (
  <GeoLocationHome
    data={dataLocation}
    title={data?.title}
    desc={data?.description}
  />
);

export default Location;
