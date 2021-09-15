import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';

import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import { LibraryItemTypes } from 'components/organisms/LibraryImage';

interface LibraryImageCarouselProps {
  imageList: LibraryItemTypes[];
}

const LibraryImageCarousel: React.FC<LibraryImageCarouselProps> = ({
  imageList,
}) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const { state } = useLocation<{ sliderIdx: number }>();
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
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          focusOnSelect: false,
          centerPadding: '0',
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          focusOnSelect: false,
          centerPadding: '0',
          dots: true,
          arrows: false,
        },
      },
    ],
    afterChange: (i: number) => setSlideIdx(i),
  };

  useEffect(() => {
    if (sliderRef.current && state && state.sliderIdx) {
      sliderRef.current.slickGoTo(state.sliderIdx);
    }
  }, [state]);
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
                  imgSrc={item.mediaThumb}
                  ratio="740x414"
                  alt={`thumb-${idx.toString()}`}
                />
                {slideIdx === idx && (
                  <div className="t-library-carousel_item_title">
                    <Text modifiers={['cyanCobaltBlue', '400', 'uppercase']}>
                      {imageList[slideIdx].title}
                    </Text>
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        </div>
        <div className="t-library-carousel_bottom">
          <div className="t-library-carousel_bottom_nav">
            <Icon iconName="arrowPrevArsenic" />
            <Text modifiers={['400', 'uppercase', 'cyanCobaltBlue']}>
              Quay lại thư viện
            </Text>
          </div>
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
