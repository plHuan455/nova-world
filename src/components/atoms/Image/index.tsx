import React from 'react';

import mapModifiers from 'utils/functions';

type SizeImageType = 'cover' | 'contain' | 'inherit' | 'initial';

interface ImageProps {
  imgSrc: string;
  alt?: string;
  ratio: Ratio;
  size?: SizeImageType;
}

const Image: React.FC<ImageProps> = ({
  imgSrc, alt, ratio, size,
}) => (
  <div
    className={mapModifiers('a-image', ratio, size)}
    style={{ backgroundImage: `url(${imgSrc})` }}
  >
    <img src={imgSrc} alt={alt} loading="lazy" />
  </div>
);

export default Image;
