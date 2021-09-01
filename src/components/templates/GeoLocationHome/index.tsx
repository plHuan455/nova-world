import React from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import LocationMap, { LocationMapProps } from 'components/organisms/LocationMap';

interface GeoLocationHomeProps {
  title: string;
  desc?: string;
  dataLocationMap: LocationMapProps;
}

const GeoLocationHome: React.FC<GeoLocationHomeProps> = ({ title = 'VỊ TRÍ ĐỊA LÝ', desc, dataLocationMap }) => (
  <div className="t-geolocationhome">
    <Animate
      extendClassName="t-geolocationhome_top"
      type="fadeInUp"
    >
      <div className="t-geolocationhome_title">
        <Heading type="h2" modifiers={['500', 's005', 'center', 'uppercase', 'cyanCobaltBlue']}>
          {title}
          <Divider />
        </Heading>
      </div>
      <div className="t-geolocationhome_desc">
        <div className="t-geolocationhome_desc_wrap">
          <Text modifiers={['center', 'dimGray']}>
            {desc}
          </Text>
        </div>
      </div>
    </Animate>
    <Animate
      type="fadeInUp"
      extendClassName="t-geolocationhome-map "
    >
      <LocationMap imgSrc={dataLocationMap.imgSrc} title={dataLocationMap.title} seemore={dataLocationMap.seemore} href="" />
    </Animate>
  </div>
);

export default GeoLocationHome;
