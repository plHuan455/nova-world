import React, { useState } from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

type FeaturedProductCardType = {
  imgSrc: string;
  title: string;
  titleSub: string;
  href: string;
  target?: string;
}

interface FeaturedProductProps {
  data: FeaturedProductCardType[];
  title?: string;
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
  title,
}) => {
  const [slideCurrent, setSlideCurrent] = useState(0);
  return (
    <div className="t-featuredproduct">
      <Container fullScreen>
        <div className="t-featuredproduct_wrap">
          <Animate
            extendClassName="t-featuredproduct_title-main"
            type="beatSmall"
          >
            <Heading type="h2">
              {title}
              <Divider />
            </Heading>
          </Animate>
          <Animate
            extendClassName="t-featuredproduct_content"
            type="scaleX"
          >
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
                    <Link href={item.href} target={item.target}>
                      <Image imgSrc={item.imgSrc} ratio="1366x768" />
                    </Link>
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
          </Animate>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProduct;
