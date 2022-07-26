import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface NewsCardProps {
  title: string;
  desc?: string;
  updatedate?: string;
  direction?: 'vertical' | 'horizontal';
  imgSrc: string;
  alt?: string;
  ratio: Ratio;
  href: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  desc,
  updatedate,
  direction = 'vertical',
  imgSrc,
  alt,
  ratio,
  href,
}) => (
  <Link href={href}>
    <div className={mapModifiers('m-newscard', direction)}>
      <div className="m-newscard_image">
        <Image imgSrc={imgSrc} alt={alt || 'thumbnail'} ratio={ratio} />
      </div>
      <div className="m-newscard_content">
        <div className="m-newscard_content_title">
          <Text modifiers={['20x24', 's00015', '500', 'white']}>
            {title}
          </Text>
        </div>
        {desc ? (
          <div className="m-newscard_content_desc">
            <Text modifiers={['400', 'white']}>
              {desc}
            </Text>
          </div>
        ) : ''}
        {updatedate ? (
          <div className="m-newscard_content_updatedate">
            <Text modifiers={['400', 'white']}>
              {updatedate}
            </Text>
          </div>
        ) : ''}
      </div>
    </div>
  </Link>
);

export default NewsCard;
