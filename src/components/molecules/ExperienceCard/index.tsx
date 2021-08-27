import React from 'react';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

interface ExperienceCardProps {
  imgSrc: string;
  alt?: string;
  title: string;
  location?: string;
  stt?: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imgSrc,
  alt,
  title,
  location,
  stt,
}) => (
  <div className="m-expcard">
    <div className="m-expcard_image">
      <Image imgSrc={imgSrc} ratio="546x618" alt={alt || 'thumbnail'} />
    </div>
    <div className="m-expcard-wrap">
      <div className="m-expcard_content">
        <div className="m-expcard_content_title">
          <Text modifiers={['24x24', 's005', '500', 'white', 'uppercase']}>
            {title}
          </Text>
        </div>
        <div className="m-expcard_content_location">
          <Text modifiers={['20x24', 's005', '400', 'white', 'capitalize']}>
            {location}
          </Text>
        </div>
      </div>
      <div className="m-expcard_stt">
        <Text modifiers={['48x24', 's005', '400', 'white']}>
          {stt}
        </Text>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
