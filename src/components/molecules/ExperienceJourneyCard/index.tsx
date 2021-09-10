/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import ExperienceTextCard, { ExperienceTextCardProps } from 'components/molecules/ExperienceTextCard';
import mapModifiers from 'utils/functions';

interface ExperienceJourneyCardProps {
  imgSrc?: string;
  ratio?: Ratio;
  title?: string;
  info?: ExperienceTextCardProps;
  position?:'bottom' | 'left' | 'right';
}

const ExperienceJourneyCard: React.FC<ExperienceJourneyCardProps> = ({
  imgSrc,
  ratio = '840x521',
  title,
  info,
  position,
}) => (
  <div className={mapModifiers('m-experience-journey-card', position)}>
    <div className="m-experience-journey-card_image">
      <Image imgSrc={imgSrc || ''} ratio={ratio} />
    </div>
    <div className="m-experience-journey-card_title">
      <Heading type="h2" modifiers={['500', 'uppercase', 's005', 'androidGreen1']}>
        {title}
      </Heading>
    </div>
    <div className="m-experience-journey-card_info">
      <ExperienceTextCard {...info} />
    </div>
  </div>
);

ExperienceJourneyCard.defaultProps = {
  position: 'right',
};

export default ExperienceJourneyCard;
