import React from 'react';

import Heading from 'components/atoms/Heading';
import Card, { CardProps } from 'components/molecules/Card';
import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

const settings = {
  infinite: false,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  speed: 300,
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
    <div className="p-experience-journey-detail_discover">
      <Animate type="zoomIn" extendClassName="p-experience-journey-detail_discover-title">
        <Heading type="h5" modifiers={['500', 'center', 'uppercase', 'cyanCobaltBlue', 's005']}>
          {title}
        </Heading>
      </Animate>
      <Animate type="scaleX" extendClassName="p-experience-journey-detail_discover-carousel">
        <Carousel settings={settings}>
          {listCard.map((item, index) => (
            <Card
              key={`item-card-${index.toString()}`}
              {...item}
            />
          ))}
        </Carousel>
      </Animate>
    </div>
  </Container>
);

export default Discover;
