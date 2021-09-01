import React from 'react';
import { Link } from 'react-router-dom';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

interface LocationCardProps {
  imgSrc: string;
  alt?: string;
  title: string;
  href: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  imgSrc,
  alt,
  title,
  href,
}) => (
  <div className="m-locationcard">
    <div className="m-locationcard_image">
      <Image imgSrc={imgSrc} ratio="257x125" alt={alt || 'thumbnail'} />
    </div>
    <div className="m-locationcard_content">
      <div className="m-locationcard_content_title">
        <Text modifiers={['16x19', '500', 'stormcloud', 'capitalize']}>
          {title}
        </Text>
      </div>
      <Link to={href}>
        <div className="m-locationcard_content_seemore">
          <Text modifiers={['16x19', '400', 'cyanCobaltBlue', 'underline']}>
            Xem thêm
          </Text>
        </div>
      </Link>
    </div>
  </div>
);

export default LocationCard;
