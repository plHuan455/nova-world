/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState } from 'react';
import Slider from 'react-slick';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

type DivergencesCardType = {
  srcLogo?: string;
  title?: string;
  numberPart?:number;
  numberTotal?:number;
  description?:string;
  link?: string;
  textLink?: string;
  imgSrc?:string;
  target?:string;
}

export const DivergencesCard:React.FC<DivergencesCardType> = ({
  srcLogo,
  title,
  numberPart = 0,
  numberTotal = 0,
  description,
  link = '/',
  textLink,
  target,
}) => {
  const firstNumber = useMemo(() => (numberPart > 10 ? numberPart : `0${numberPart || ''}`), [numberPart]);
  const secondNumber = useMemo(() => (numberTotal > 10 ? numberTotal : `0${numberTotal || ''}`), [numberTotal]);
  return (
    <div className="t-divergences_card">
      {srcLogo
      && (
      <div className="t-divergences_card_branch">
        <Image ratio="167x42" imgSrc={srcLogo} size="contain" />
      </div>
      )}
      <div className="t-divergences_card_title">
        <Text modifiers={['500', 'cyanCobaltBlue', 'uppercase', '24x32', 'lg']}>
          {title}
        </Text>
        <div className="t-divergences_card_part">
          <Text modifiers={['32x48', 'cyanCobaltBlue', 'uppercase', '500']}>
            {firstNumber}
            <span>{`/${secondNumber}`}</span>
          </Text>
        </div>
      </div>
      <div className="t-divergences_card_description">
        <Text>
          {description}
        </Text>
      </div>
      <div className="t-divergences_card_link">
        <Link
          href={link}
          target={target}
        >
          <Text modifiers={['cyanCobaltBlue', 'underline', '700']}>
            {textLink}
          </Text>
        </Link>
      </div>
    </div>
  );
};

interface DivergencesProps {
  data:DivergencesCardType[];
  title?:string;
}

const settingsLeft = {
  infinite: false,
  dots: false,
  slidesToShow: 1,
  draggable: false,
  speed: 0,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow variant="normal" />,
  nextArrow: <NextArrow variant="normal" />,
};

const settingsRight = {
  infinite: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Divergences: React.FC<DivergencesProps> = ({
  data,
  title,
}) => {
  const [nav1, setNav1] = useState<Slider|null>();
  const [nav2, setNav2] = useState<Slider|null>();

  return (
    <div className="t-divergences">
      <Animate
        extendClassName="t-divergences_heading"
        type="beatSmall"
      >
        <Heading type="h2">
          {title}
          <Divider />
        </Heading>
      </Animate>
      <Container noPaddingRightDesktop>
        <Animate
          extendClassName="t-divergences_content"
          type="animationFramesRight"
        >
          <div className="t-divergences_left">
            <div className="t-divergences_carousel-left">
              <Carousel
                asNavFor={nav2 as Slider}
                ref={(slider) => {
                  setNav1(slider);
                }}
                settings={settingsLeft}
              >
                {
                  data.map((item, index) => (
                    <DivergencesCard
                      key={`item-left-${index.toString()}`}
                      {...item}
                    />
                  ))
                }
              </Carousel>
            </div>
          </div>
          <div className="t-divergences_right">
            <div className="t-divergences_carousel-right">
              <Carousel
                asNavFor={nav1 as Slider}
                ref={(slider) => {
                  setNav2(slider);
                }}
                settings={settingsRight}
              >
                {
                  data.map((item, index) => (
                    <Image key={`item-right-${index.toString()}`} ratio="762x470" imgSrc={item.imgSrc || ''} />
                  ))
                }
              </Carousel>
            </div>
          </div>
        </Animate>
      </Container>
    </div>
  );
};

Divergences.defaultProps = {
};

export default Divergences;
