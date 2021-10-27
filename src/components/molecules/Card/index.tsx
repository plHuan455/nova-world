import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export type SiteName = 'novaworld' | 'novamorito' | 'novatropicana' | 'novawonderland' | 'novahabana' | string;

export interface CardProps {
  imgSrc?: string;
  title?: string;
  description?: string;
  href?: string;
  target?: string;
  type?: string;
  siteName?: SiteName;
}

const Card: React.FC<CardProps> = ({
  imgSrc, title, description, href, target,
}) => (
  <div className="m-card">
    <Link href={href || ''} target={target}>
      <div className="m-card_thumbnail">
        <Image imgSrc={imgSrc || ''} alt={title} ratio="16x9" />
      </div>
      <div className="m-card_content">
        <div className="m-card_content_title">
          <Text modifiers={['500', 'cyanCobaltBlue']}>{title}</Text>
        </div>
        <div className="m-card_spacer" />
        <div className="m-card_content_desc">
          <Text modifiers={['400']} innerHTML={description} />
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
