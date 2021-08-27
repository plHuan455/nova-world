import React from 'react';

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
    {position || 0}
  </div>
);

const settingsLeft = {
  infinite: false,
  dots: false,
  slidesToShow: 1,
  draggable: false,
  speed: 0,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow variant="green" />,
  nextArrow: <NextArrow variant="green" />,
};

const IntroductionHome: React.FC<IntroductionHomeProps> = () => (
  <div className="t-introduction-home">
    <Container>
      <div className="t-introduction-home_content">
        <div className="t-introduction-home_left">
          <Image imgSrc={img1} ratio="551x335" />
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
            <div className="t-introduction-home_right_bottom">
              <Carousel settings={settingsLeft}>
                <LinePosition position={1} />
                <LinePosition position={2} />
                <LinePosition position={3} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Container>

  </div>
);

IntroductionHome.defaultProps = {
};

export default IntroductionHome;
