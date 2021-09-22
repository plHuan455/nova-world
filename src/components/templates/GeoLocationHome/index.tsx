import React from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import LocationMap, { LocationMapProps } from 'components/organisms/LocationMap';

interface GeoLocationHomeProps extends LocationMapProps {
  title?: string;
  desc?: string;
}

const GeoLocationHome: React.FC<GeoLocationHomeProps> = ({ title, desc, data }) => (
  <div className="t-geolocationhome">
    <Animate
      extendClassName="t-geolocationhome_top"
      type="beatSmall"
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
      type="scaleY"
      extendClassName="t-geolocationhome-map "
    >
      <LocationMap data={data} />
    </Animate>
  </div>
);

export default GeoLocationHome;
