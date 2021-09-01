import React, { useState } from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

interface IntroductionHomeProps {
  data: {
    imgSrc: string;
    description: string;
  }[]
}

const settings = {
  infinite: false,
  dots: false,
  slidesToShow: 1,
  draggable: false,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow variant="green" />,
  nextArrow: <NextArrow variant="green" />,
};

const IntroductionHome: React.FC<IntroductionHomeProps> = ({
  data,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="t-introductionhome">
      <div className="t-introductionhome_bg-tree-top" />
      <div className="t-introductionhome_bg-tree-bottom" />
      <div className="t-introductionhome_bg-circle-top" />
      <div className="t-introductionhome_bg-circle-bottom" />
      <Container>
        <Animate
          type="fadeInUp"
          extendClassName="t-introductionhome_title"
        >
          <Heading type="h2">
            NOVAWORLD HO TRAM
            <Divider />
          </Heading>
        </Animate>
        {
          data.length > 0 && (
            <Animate
              type="fadeInUp"
              extendClassName="t-introductionhome_content"
            >
              <div
                className="t-introductionhome_left"
              >
                <div className="t-introductionhome_box">
                  {
                    data.map((item, index) => (
                      <div
                        key={`item-${index.toString()}`}
                        className={`t-introductionhome_box-image ${index === currentSlide ? 'active' : 'remove'}`}
                      >
                        <Image imgSrc={item.imgSrc} ratio="551x335" />
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
                    <Text modifiers={['cyanCobaltBlue']}>
                      {data.length - 1 >= currentSlide ? data[currentSlide].description : ''}
                    </Text>
                  </div>
                  <div className="t-introductionhome_carousel">
                    <div className="t-introductionhome_number-current">
                      <Text modifiers={['20x32', 'sm', 'androidGreen1', 's005']}>
                        01
                      </Text>
                    </div>
                    <Carousel
                      settings={{
                        ...settings,
                        afterChange: (current: number) => {
                          setCurrentSlide(current);
                        },
                      }}
                    >
                      {
                        data.map((_, index) => (
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
                        {`0${data.length}`}
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
