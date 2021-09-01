import React from 'react';

import dataLocation from 'assets/dataDummy/location';
import GeoLocationHome from 'components/templates/GeoLocationHome';

const Location:React.FC = () => (
  <GeoLocationHome
    data={dataLocation}
    title="VỊ TRÍ ĐỊA LÝ"
    desc="Sở hữu vị thế đắc địa sông biển giao hòa duy nhất tại NovaWorld Ho Tram. Cách TPHCM 90 phút di chuyển qua cao tốc Long Thành – Dầu Giây. 60 phút di chuyển từ sân bay quốc tế Long Thành. Cơ sở hạ tầng giao thông phát triển hiện hữu, hoàn chỉnh."
  />
);

export default Location;
