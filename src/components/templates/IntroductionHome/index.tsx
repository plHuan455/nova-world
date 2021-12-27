import React, { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import { getImageURL } from 'utils/functions';

interface IntroductionHomeProps {
  title?: string;
  description?: string;
  image: {
    image: string;
  }[];
}

const settings: Settings = {
  infinite: false,
  dots: false,
  slidesToShow: 1,
  draggable: true,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow variant="green" />,
  nextArrow: <NextArrow variant="green" />,
  lazyLoad: 'ondemand',
};

const IntroductionHome: React.FC<IntroductionHomeProps> = ({
  title,
  description,
  image,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const refCarousel = useRef<Slider|null>(null);

  const handleSlide = () => {
    if (currentSlide < image.length - 1) {
      refCarousel.current?.slickNext();
    } else {
      refCarousel.current?.slickGoTo(0);
    }
  };

  return (
    <div className="t-introductionhome">
      <div className="t-introductionhome_bg-tree-top" />
      <div className="t-introductionhome_bg-tree-bottom" />
      <div className="t-introductionhome_bg-circle-top" />
      <div className="t-introductionhome_bg-circle-bottom" />
      <Container>
        <Animate
          type="beatSmall"
          extendClassName="t-introductionhome_title"
        >
          <Heading type="h2">
            {title}
            <Divider />
          </Heading>
        </Animate>
        {
          image.length > 0 && (
            <Animate
              type="zoomIn"
              extendClassName="t-introductionhome_content"
            >
              <div
                className="t-introductionhome_left"
              >
                <div className="t-introductionhome_box">
                  {
                    image.map((item, index) => (
                      <div
                        onClick={handleSlide}
                        key={`item-${index.toString()}`}
                        className={`t-introductionhome_box-image t-introductionhome_box-image-${index} ${index === currentSlide ? 'active' : 'remove'}`}
                      >
                        <Image imgSrc={getImageURL(item.image)} ratio="16x9" />
                      </div>
                    ))
                  }
                </div>
              </div>
              <div
                className="t-introductionhome_right"
              >
                <div className="t-introductionhome_right_content">
                  <div className="t-introductionhome_description">
                    <Text modifiers={['cyanCobaltBlue', 'justify']}>
                      {description}
                    </Text>
                  </div>
                  <div className="t-introductionhome_carousel">
                    <div className="t-introductionhome_number-current">
                      <Text modifiers={['20x32', 'sm', 'androidGreen1', 's005']}>
                        01
                      </Text>
                    </div>
                    <Carousel
                      ref={refCarousel}
                      settings={{
                        ...settings,
                        afterChange: (current: number) => {
                          setCurrentSlide(current);
                        },
                      }}
                    >
                      {
                        image.map((_, index) => (
                          <div
                            key={`position-item-${index.toString()}`}
                            className="t-introductionhome_position-item"
                          >
                            <Text modifiers={['20x32', 'sm', 's005', 'uppercase', '500', 'white']}>
                              {index + 1}
                            </Text>
                          </div>
                        ))
                      }
                    </Carousel>
                    <div className="t-introductionhome_number-total">
                      <Text modifiers={['20x32', 'sm', 'green', 's005']}>
                        {image.length >= 10 ? image.length : `0${image.length}`}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          )
        }
      </Container>
    </div>
  );
};

export default IntroductionHome;
