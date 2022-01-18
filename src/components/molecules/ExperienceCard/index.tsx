/* eslint-disable no-nested-ternary */
import React, { useRef, useState } from 'react';
import ReactSlick from 'react-slick';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Carousel from 'components/organisms/Carousel';
import { scrollCenter } from 'utils/functions';

export interface ExperienceCardItem {
  href: string;
  title: string;
  subTitle: string;
  imgSrc: string;
  alt?: string;
}

export interface ExperienceCardProps {
  item: ExperienceCardItem[];
}

const settings = {
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 1700,
  speed: 700,
  fade: true,
  dotsClass: 'slick-dots o-carousel_dots',
  customPaging() {
    return <span className="o-carousel_dots_main wide" />;
  },
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  const [indexActive, setIndexActive] = useState(-1);
  const ref = useRef<ReactSlick | null>(null);

  return (
    <div
      onMouseEnter={() => {
        ref.current?.slickPlay();
      }}
      onMouseLeave={() => {
        ref.current?.slickPause();
      }}
      className="m-expcard"
    >
      <div className="m-expcard_image">
        <Carousel
          ref={ref}
          settings={{
            ...settings,
            beforeChange: (currentSlide) => {
              setIndexActive(currentSlide);
            },
            afterChange: () => {
              scrollCenter('.o-carousel_dots', '.slick-dots .slick-active');
              setIndexActive(-1);
            },
          }}
        >
          {item?.map((e, index) => (
            <div
              key={`item-${index.toString()}`}
              className={`m-expcard_item-carousel ${
                indexActive === index ? 'active' : ''
              }`}
            >
              <Link href={e.href}>
                <Image
                  imgSrc={e.imgSrc}
                  ratio="546x618"
                  alt={e.title || 'thumbnail'}
                />
              </Link>
              <div className="m-expcard-wrap">
                <div className="m-expcard_content">
                  <div className="m-expcard_content_title">
                    <Text modifiers={['24x32', 's005', '500', 'white', 'uppercase']}>
                      {e.title}
                    </Text>
                  </div>
                  <div className="m-expcard_content_location">
                    <Text modifiers={['20x24', 's005', '400', 'white', 'capitalize', 'sm']}>
                      {e?.subTitle}
                    </Text>
                  </div>
                </div>
                <div className="m-expcard_stt">
                  <Text modifiers={['48x24', 's005', '400', 'white']}>
                    {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {/* <div className="m-expcard-wrap">
        <div className="m-expcard_content">
          <div className="m-expcard_content_title">
            <Text modifiers={['24x32', 's005', '500', 'white', 'uppercase']}>
              {indexActive ? item[indexActive]?.title : ''}
            </Text>
          </div>
          <div className="m-expcard_content_location">
            <Text modifiers={['20x24', 's005', '400', 'white', 'capitalize', 'sm']}>
              {indexActive ? item[indexActive]?.subTitle : ''}
            </Text>
          </div>
        </div>
        <div className="m-expcard_stt">
          <Text modifiers={['48x24', 's005', '400', 'white']}>
            {indexActive && item[indexActive] && item[indexActive]?.stt
              ? (item[indexActive].stt || 0) > 9
                ? item[indexActive]?.stt
                : `0${item[indexActive].stt}`
              : ''}
          </Text>
        </div>
      </div> */}
    </div>
  );
};

export default ExperienceCard;
