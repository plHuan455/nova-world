import React, {
  useEffect, useRef, useState,
} from 'react';
import Slider from 'react-slick';

import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import { LibraryItemTypes } from 'components/organisms/LibraryImage';

interface LibraryImageCarouselProps {
  imageList: LibraryItemTypes[];
  idxActive?: number;
  handleBack?: () => void;
}

const LibraryImageCarousel: React.FC<LibraryImageCarouselProps> = ({
  imageList,
  idxActive = 0,
  handleBack,
}) => {
  const [slideIdx, setSlideIdx] = useState<number>(idxActive);

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    slidesToShow: 1,
    centerPadding: '21.6%',
    centerMode: true,
    arrows: true,
    dotsClass: 'slick-dots o-carousel_dots',
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    swipeToSlide: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: false,
          centerPadding: '16%',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: false,
          centerPadding: '10%',
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          focusOnSelect: false,
          centerPadding: '0',
        },
      },
    ],
    afterChange: (i: number) => {
      setSlideIdx(i);
    },
  };

  useEffect(() => {
    if (sliderRef.current && idxActive) {
      sliderRef.current.slickGoTo(idxActive, true);
    }
  }, [idxActive]);

  return (
    <div className="t-library-carousel">
      <Container fullScreen>
        <div className="t-library-carousel_top">
          <Carousel ref={sliderRef} settings={settings}>
            {imageList?.map((item, idx) => (
              <div
                key={`thumb-${idx.toString()}`}
                className="t-library-carousel_item"
              >
                <Image
                  imgSrc={item.imgSrc}
                  ratio="740x414"
                  alt={`thumb-${idx.toString()}`}
                />
                <div className="t-library-carousel_item_title">
                  <Text modifiers={['cyanCobaltBlue', '400', 'uppercase']}>
                    {item.title || ''}
                  </Text>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
      <Container>
        <div className="t-library-carousel_bottom">
          <button type="button" className="t-library-carousel_bottom_nav" onClick={handleBack}>
            <Icon iconName="arrowPrevArsenic" />
            <Text modifiers={['400', 'uppercase', 'cyanCobaltBlue']}>
              Quay lại thư viện
            </Text>
          </button>
          <div className="t-library-carousel_bottom_count">
            <Text modifiers={['32x48', 'cyanCobaltBlue', '500']}>
              {slideIdx < 9 ? `0${slideIdx + 1}` : slideIdx + 1}
            </Text>
            <Text modifiers={['16x48', 'cyanCobaltBlue', '400']}>
              {`/${imageList?.length}`}
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

LibraryImageCarousel.defaultProps = {};

export default LibraryImageCarousel;
