import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import imgLocationCard from 'assets/images/img_locationcard.png';
import GeoLocationHome from 'components/templates/GeoLocationHome';

const dataLocationMap = {
  imgSrc: imgLocationCard,
  title: 'Novaworld Hồ Tràm - Morito',
  seemore: 'Xem thêm',
  href: '',
};

const Location:React.FC = () => (
  <Router>
    <GeoLocationHome
      dataLocationMap={dataLocationMap}
      title="VỊ TRÍ ĐỊA LÝ"
      desc="Sở hữu vị thế đắc địa sông biển giao hòa duy nhất tại NovaWorld Ho Tram. Cách TPHCM 90 phút di chuyển qua cao tốc Long Thành – Dầu Giây. 60 phút di chuyển từ sân bay quốc tế Long Thành. Cơ sở hạ tầng giao thông phát triển hiện hữu, hoàn chỉnh."
    />
  </Router>
);

export default Location;
