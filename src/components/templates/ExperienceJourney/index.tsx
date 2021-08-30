import React, { useRef } from 'react';

import Divider from 'components/atoms/Divider';
import Text from 'components/atoms/Text';
import ExperienceCard, { ExperienceCardProps } from 'components/molecules/ExperienceCard';
import Container from 'components/organisms/Container';
import useScrollAnimate from 'hooks/useScrollAnimation';

interface ExperienceJourneyProps {
  title: string;
  dataExperienceJourney?: ExperienceCardProps[];
}

const ExperienceJourney: React.FC<ExperienceJourneyProps> = ({ title, dataExperienceJourney }) => {
  const ref = useRef<HTMLDivElement>(null);
  const animate = useScrollAnimate(ref);
  return (
    <div className="t-expjourney">
      <div className={animate ? 't-expjourney_wrap animate animate-fadeInUp' : 't-expjourney_wrap preanimate'}>
        <Container fullScreen>
          <div className="t-expjourney_title">
            <Text modifiers={['48x56', '500', 's005', 'center', 'cyanCobaltBlue', 'uppercase']}>
              {title}
              <Divider />
            </Text>
          </div>
          <div className="t-expjourney_gallery">
            {
              dataExperienceJourney && dataExperienceJourney?.length > 0
              && dataExperienceJourney?.map((item, index) => (
                <div
                  key={`gallery${index.toString()}`}
                  className="t-expjourney_gallery_item"
                >
                  <ExperienceCard
                    imgSrc={item.imgSrc}
                    title={item.title}
                    location={item.location}
                    stt={index + 1}
                    href=""
                  />
                </div>
              ))
            }
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ExperienceJourney;
