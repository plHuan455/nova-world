/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import ExperienceTextCard from 'components/molecules/ExperienceTextCard';
import mapModifiers from 'utils/functions';

export interface ExperienceJourneyCardProps {
  imgSrc?: string;
  ratio?: Ratio;
  title?: string;
  btnLink?: string;
  btnLabel?: string;
  content?: string;
  position?:'bottom' | 'left' | 'right';
}

const ExperienceJourneyCard: React.FC<ExperienceJourneyCardProps> = ({
  imgSrc,
  ratio = '840x521',
  title,
  btnLink,
  btnLabel,
  content,
  position,
}) => (
  <div className={mapModifiers('m-experience-journey-card', position)}>
    <div className="m-experience-journey-card_image">
      <Image imgSrc={imgSrc || ''} ratio={ratio} />
    </div>
    <div className="m-experience-journey-card_content">
      <div className="m-experience-journey-card_title">
        <Heading type="h2" modifiers={['500', 'uppercase', 's005', 'white']}>
          {title}
        </Heading>
      </div>
      <div className="m-experience-journey-card_info">
        <ExperienceTextCard
          btnLink={btnLink}
          btnLabel={btnLabel}
          content={content}
        />
      </div>
    </div>
  </div>
);

ExperienceJourneyCard.defaultProps = {
  position: 'right',
};

export default ExperienceJourneyCard;
