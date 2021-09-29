import React from 'react';
import { Settings } from 'react-slick';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

export interface RelatedCardProps {
  imgSrc: string;
  title?: string;
  description?: string;
  href?: string;
  target?: string;
}

const settings = (length:number) => ({
  infinite: length > 3,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  speed: 300,
  prevArrow: <PrevArrow variant="light" />,
  nextArrow: <NextArrow variant="light" />,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        infinite: length > 2,
        slidesToShow: 2,
        centerPadding: '100',
        className: 'center',
        centerMode: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        infinite: length > 2,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        infinite: length > 1,
        slidesToShow: 1,
      },
    },
  ],
});

const RelatedCard: React.FC<RelatedCardProps> = ({
  imgSrc,
  title,
  description,
  href = '',
  target,
}) => (
  <Link href={href} target={target}>
    <div className="p-product_related-card">
      <div className="thumbnail">
        <Image imgSrc={imgSrc} ratio="451x273" alt={title} />
      </div>
      <div className="title">
        <Text modifiers={['20x24', '500', 'white']}>
          {title}
        </Text>
      </div>
      <div className="description">
        <Text modifiers={['400', 'white']}>
          {description}
        </Text>
      </div>
    </div>
  </Link>
);

interface RelatedProps {
  title?: string;
  data?: RelatedCardProps[];
}

const Related: React.FC<RelatedProps> = ({
  title,
  data = [],
}) => (
  <div className="p-product_related">
    <Container>
      <Animate type="zoomIn" extendClassName="title">
        <Heading type="h2" modifiers={['500', 'white', 'center']}>
          {title}
        </Heading>
      </Animate>
    </Container>
    <Container noPaddingRightDesktopLarge>
      <Animate type="scaleX" extendClassName="content">
        <Carousel settings={settings(data.length) as Settings}>
          {data.map((item, index) => (
            <RelatedCard
              key={`_relatedcard${String(index)}`}
              {...item}
            />
          ))}
        </Carousel>
      </Animate>
    </Container>
  </div>
);
export default Related;
