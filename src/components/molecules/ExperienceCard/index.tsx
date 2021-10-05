import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Carousel from 'components/organisms/Carousel';
import mapModifiers, { scrollCenter } from 'utils/functions';

export interface ExperienceCardProps {
  listImg?: Array<string>;
  alt?: string;
  title: string;
  location?: string;
  stt?: number
  href: string;
}

const settings = {
  infinite: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: 'slick-dots o-carousel_dots',
  customPaging() {
    return (
      <span className="o-carousel_dots_main" />
    );
  },
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  listImg,
  alt,
  title,
  location,
  stt,
  href,
}) => (

  <div className="m-expcard">
    <div className={mapModifiers('m-expcard_image', `${stt}`)}>
      <Carousel settings={{
        ...settings,
        afterChange: () => scrollCenter(
          `.m-expcard_image-${stt} .o-carousel_dots`,
          `.m-expcard_image-${stt} .slick-dots .slick-active`,
        ),
      }}
      >
        {
          listImg?.map((item, index) => (
            <Link
              key={`item-${index.toString()}`}
              href={href}
            >
              <Image imgSrc={item} ratio="546x618" alt={alt || 'thumbnail'} />
            </Link>
          ))
        }
      </Carousel>
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
);

export default ExperienceCard;
