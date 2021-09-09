import React from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import ExperienceCard, { ExperienceCardProps } from 'components/molecules/ExperienceCard';
import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

interface ExperienceJourneyProps {
  title: string;
  dataExperienceJourney?: ExperienceCardProps[];
}

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerPadding: '40',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow variant="large" />,
        rows: 1,
        slidesPerRow: 1,
      },
    },
  ],
};

const ExperienceJourney: React.FC<ExperienceJourneyProps> = ({ title, dataExperienceJourney }) => (
  <div className="t-expjourney">
    <div className="t-expjourney_wrap">
      <Container fullScreen>
        <Animate
          type="fadeInUp"
          extendClassName="t-expjourney_title"
        >
          <Heading type="h2">
            {title}
            <Divider />
          </Heading>
        </Animate>
        <Animate
          type="slideInRight"
          extendClassName="t-expjourney_gallery"
        >
          <Carousel
            settings={settings}
          >
            {
                dataExperienceJourney && dataExperienceJourney.length > 0
                && dataExperienceJourney.map((item, index) => (
                  <div
                    key={`gallery${index.toString()}`}
                    className="t-expjourney_gallery_item"
                  >
                    <ExperienceCard
                      imgSrc={item.imgSrc}
                      title={item.title}
                      location={item.location}
                      stt={index + 1}
                      href={item.href}
                    />
                  </div>
                ))
              }
          </Carousel>
        </Animate>
      </Container>
    </div>
  </div>
);

export default ExperienceJourney;