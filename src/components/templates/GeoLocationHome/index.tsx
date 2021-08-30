import React, { useRef } from 'react';

import Divider from 'components/atoms/Divider';
import Text from 'components/atoms/Text';
import LocationMap, { LocationMapProps } from 'components/organisms/LocationMap';
import useScrollAnimate from 'hooks/useScrollAnimation';

interface GeoLocationHomeProps {
  title: string;
  desc?: string;
  dataLocationMap: LocationMapProps;
}

const GeoLocationHome: React.FC<GeoLocationHomeProps> = ({ title = 'VỊ TRÍ ĐỊA LÝ', desc, dataLocationMap }) => {
  const ref = useRef<HTMLDivElement>(null);
  const animate = useScrollAnimate(ref);
  return (
    <div className="t-geolocationhome">
      <div className={animate ? 't-geolocationhome_top animate animate-fadeInUp' : 't-geolocationhome_top preanimate'}>
        <div className="t-geolocationhome_title">
          <Text modifiers={['48x56', '500', 's005', 'center', 'uppercase', 'cyanCobaltBlue']}>
            {title}
            <Divider />
          </Text>
        </div>
        <div className="t-geolocationhome_desc">
          <div className="t-geolocationhome_desc_wrap">
            <Text modifiers={['center', 'dimGray']}>
              {desc}
            </Text>
          </div>
        </div>
      </div>
      <div className="t-geolocationhome-map">
        <LocationMap imgSrc={dataLocationMap.imgSrc} title={dataLocationMap.title} seemore={dataLocationMap.seemore} href="" />
      </div>
    </div>
  );
};

export default GeoLocationHome;
