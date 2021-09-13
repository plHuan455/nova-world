/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Heading from 'components/atoms/Heading';
import Card, { CardProps } from 'components/molecules/Card';
import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

const settings = {
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow variant="normal" />,
  nextArrow: <NextArrow variant="normal" />,
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

type DiscoverProps={
  listCard:CardProps[];
  title?: string;
}

const Discover:React.FC<DiscoverProps> = ({
  listCard,
  title,
}) => (
  <Container>
    <Animate
      type="fadeInUp"
      extendClassName="p-experience-journey-detail_discover"
    >
      <div className="p-experience-journey-detail_discover-title">
        <Heading type="h2" modifiers={['500', 'center', 'uppercase', 'cyanCobaltBlue', 's005']}>
          {title}
        </Heading>
      </div>
      <div className="p-experience-journey-detail_discover-carousel">
        <Carousel settings={settings}>
          {listCard.map((item, index) => (
            <Card
              key={`item-card-${index.toString()}`}
              {...item}
            />
          ))}
        </Carousel>
      </div>
    </Animate>
  </Container>
);

export default Discover;
