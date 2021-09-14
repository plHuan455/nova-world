import React from 'react';
import { Link } from 'react-router-dom';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

export interface CardProps {
  imgSrc?: string;
  title?: string;
  description?: string;
  href?: string;
}

const Card: React.FC<CardProps> = ({
  imgSrc, title, description, href,
}) => (
  <div className="m-card">
    <Link to={{
      pathname: href,
      search: window.location.search,
    }}
    >
      <div className="m-card_thumbnail">
        <Image imgSrc={imgSrc || ''} alt={title} ratio="354x222" />
      </div>
      <div className="m-card_content">
        <div className="m-card_content_title">
          <Text modifiers={['500', 'cyanCobaltBlue']}>{title}</Text>
        </div>
        <div className="m-card_spacer" />
        <div className="m-card_content_desc">
          <Text modifiers={['400']}>{description}</Text>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
