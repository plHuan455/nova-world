import React from 'react';

import Image from 'components/atoms/Image';
import mapModifiers from 'utils/functions';

interface BannerProps {
  isHome?: boolean;
  thumbnail: string;
  alt?: string;
}

const Banner: React.FC<BannerProps> = ({ isHome, thumbnail, alt }) => (
  <div className={mapModifiers('o-banner', isHome && 'home')}>
    <div className="o-banner-wrap">
      <Image imgSrc={thumbnail} ratio="1366x768" alt={alt} />
    </div>
  </div>
);

export default Banner;
