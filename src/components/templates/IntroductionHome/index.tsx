/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import img2 from 'assets/images/img-library-1.jpg';
import img3 from 'assets/images/img-library-2.jpg';
import img1 from 'assets/images/img_newscard.png';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

interface IntroductionHomeProps {
}
type LinePositionProps={
  position?: number;
}
export const LinePosition:React.FC<LinePositionProps> = ({
  position,
}) => (
  <div className="t-introduction-home_position-item">
    <Text modifiers={['20x32', 'sm', 's005', 'uppercase', '500', 'white']}>
      {position || 0}
    </Text>
  </div>
);

const settingsPosition = {
  infinite: false,
  dots: false,
  slidesToShow: 1,
  draggable: false,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow variant="green" />,
  nextArrow: <NextArrow variant="green" />,
};

const settingsDescription = {
  infinite: false,
  dots: false,
  slidesToShow: 1,
  draggable: false,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow variant="green" />,
  nextArrow: <NextArrow variant="green" />,
};
const images = [img1, img2, img3];
const IntroductionHome: React.FC<IntroductionHomeProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="t-introduction-home">
      <Container>
        <div className="t-introduction-home_content">
          <div className="t-introduction-home_left">
            <div className="t-introduction-home_box">
              {
                images.map((item, index) => (
                  <div
                    key={`item-${index.toString()}`}
                    className={`t-introduction-home_box-image ${index + 1 === currentSlide ? 'active' : 'remove'}`}
                  >
                    <Image imgSrc={item} ratio="551x335" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="t-introduction-home_right">
            <div className="t-introduction-home_right_content">
              <div className="t-introduction-home_right_top">
                <Text modifiers={['cyanCobaltBlue']}>
                  Dự án chia làm nhiều giai đoạn phát triển,
                  khai thác thế mạnh của thiên nhiên Hồ Tràm nguyên sơ,
                  kết hợp hài hoà giữa địa thế rừng và biển liền kề,
                  tạo nên chuỗi du lịch giải trí đa dạng và trải nghiệm nghỉ dưỡng.
                </Text>
              </div>
              <div className="t-introduction-home_carousel-position">
                <div className="t-introduction-home_number-current">
                  <Text modifiers={['20x32', 'sm', 'androidGreen1', 's005']}>
                    {currentSlide > 10 ? currentSlide : `0${currentSlide}`}
                  </Text>
                </div>
                <Carousel
                  settings={{
                    ...settingsPosition,
                    afterChange: (current:number) => {
                      setCurrentSlide(current + 1);
                    },
                  }}
                >
                  <LinePosition position={1} />
                  <LinePosition position={2} />
                  <LinePosition position={3} />
                </Carousel>
                <div className="t-introduction-home_number-total">
                  <Text modifiers={['20x32', 'sm', 'androidGreen1', 's005']}>
                    03
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </div>
  );
};

IntroductionHome.defaultProps = {
};

export default IntroductionHome;
