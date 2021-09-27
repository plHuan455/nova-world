import React from 'react';
import { Link } from 'react-router-dom';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
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

const settings = {
  infinite: false,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  speed: 300,
  prevArrow: <PrevArrow variant="light" />,
  nextArrow: <NextArrow variant="light" />,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        prevArrow: <PrevArrow variant="light" />,
        nextArrow: <NextArrow variant="light" />,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        prevArrow: <PrevArrow variant="light" />,
        nextArrow: <NextArrow variant="light" />,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        prevArrow: <PrevArrow variant="light" />,
        nextArrow: <NextArrow variant="light" />,
      },
    },
  ],
};

const RelatedCard: React.FC<RelatedCardProps> = ({
  imgSrc,
  title,
  description,
  href = '',
  target,
}) => (
  <Link to={href} target={target}>
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
    <Container noPaddingRightDesktop>
      <Animate type="scaleX" extendClassName="content">
        <Carousel settings={settings}>
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
