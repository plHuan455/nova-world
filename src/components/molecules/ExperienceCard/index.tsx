import React from 'react';
import { Link } from 'react-router-dom';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

export interface ExperienceCardProps {
  imgSrc: string;
  alt?: string;
  title: string;
  location?: string;
  stt?: number
  href: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imgSrc,
  alt,
  title,
  location,
  stt,
  href,
}) => (
  <Link to={href}>
    <div className="m-expcard">
      <div className="m-expcard_image">
        <Image imgSrc={imgSrc} ratio="546x618" alt={alt || 'thumbnail'} />
      </div>
      <div className="m-expcard-wrap">
        <div className="m-expcard_content">
          <div className="m-expcard_content_title">
            <Text modifiers={['24x32', 's005', '500', 'white', 'uppercase']}>
              {title}
            </Text>
          </div>
          <div className="m-expcard_content_location">
            <Text modifiers={['20x24', 's005', '400', 'white', 'capitalize', 'sm']}>
              {location}
            </Text>
          </div>
        </div>
        <div className="m-expcard_stt">
          <Text modifiers={['48x24', 's005', '400', 'white']}>
            {stt && stt > 9 ? stt : `0${stt}`}
          </Text>
        </div>
      </div>
    </div>
  </Link>
);

export default ExperienceCard;
