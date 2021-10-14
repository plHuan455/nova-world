import React, { useRef, useState } from 'react';
import ReactSlick from 'react-slick';

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
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  speed: 1200,
  fade: true,
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
}) => {
  const [indexActive, setIndexActive] = useState(-1);
  const ref = useRef<ReactSlick|null>(null);
  const [idInterval, setIdInterval] = useState<NodeJS.Timeout|null>(null);

  return (
    <div
      onMouseEnter={() => {
        setIdInterval(setInterval(() => {
          ref.current?.slickNext();
        }, 2000));
      }}
      onMouseLeave={() => {
        if (idInterval) {
          clearInterval(idInterval);
          setIdInterval(null);
        }
      }}
      className="m-expcard"
    >
      <div
        className={mapModifiers('m-expcard_image', `${stt}`)}
      >
        <Carousel
          ref={ref}
          settings={{
            ...settings,
            beforeChange: (currentSlide) => {
              setIndexActive(currentSlide);
            },
            afterChange: () => {
              scrollCenter(
                `.m-expcard_image-${stt} .o-carousel_dots`,
                `.m-expcard_image-${stt} .slick-dots .slick-active`,
              );
              setIndexActive(-1);
            },
          }}
        >
          {
          listImg?.map((item, index) => (
            <div
              key={`item-${index.toString()}`}
              className={`m-expcard_item-carousel ${indexActive === index ? 'active' : ''}`}
            >
              <Link
                href={href}
              >
                <Image imgSrc={item} ratio="546x618" alt={alt || 'thumbnail'} />
              </Link>
            </div>
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
};

export default ExperienceCard;
