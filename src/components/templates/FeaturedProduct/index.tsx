import React, { useState } from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

type FeaturedProductCardType = {
  imgSrc: string;
  title: string;
  titleSub: string;
}

interface FeaturedProductProps {
  data: FeaturedProductCardType[];
}

const settings = {
  infinite: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  data,
}) => {
  const [slideCurrent, setSlideCurrent] = useState(0);
  return (
    <div className="t-featuredproduct">
      <Container fullScreen>
        <div className="t-featuredproduct_wrap">
          <div className="t-featuredproduct_title-main">
            <Heading type="h2">
              SẢN PHẨM NỔI BẬT
            </Heading>
            <Divider />
          </div>
          <div className="t-featuredproduct_content">
            <div className="t-featuredproduct_carousel">
              <Carousel
                settings={{
                  ...settings,
                  afterChange: (current: number) => {
                    setSlideCurrent(current);
                  },
                }}
              >
                {data.map((item, index) => (
                  <div
                    key={`card-${index.toString()}`}
                    className="t-featuredproduct_card"
                  >
                    <Image imgSrc={item.imgSrc} ratio="1366x768" />
                  </div>
                ))}
              </Carousel>
            </div>
            {
            data.length >= slideCurrent + 1 && (
              <div className="t-featuredproduct_info">
                <div className="t-featuredproduct_info_title">
                  <Text modifiers={['20x32', 'md', '500', 'cyanCobaltBlue']}>
                    {data[slideCurrent].title}
                  </Text>
                </div>
                <div className="t-featuredproduct_info_title-sub">
                  <Text modifiers={['16x19', 'cyanCobaltBlue']}>
                    {data[slideCurrent].titleSub}
                  </Text>
                </div>
              </div>
            )
          }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProduct;