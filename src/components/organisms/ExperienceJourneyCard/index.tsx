import React, { useMemo } from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import ExperienceTextCard from 'components/molecules/ExperienceTextCard';
import mapModifiers from 'utils/functions';

export interface ExperienceJourneyCardProps {
  imgSrc?: string;
  title?: string;
  btnLink?: string;
  btnLabel?: string;
  content?: string;
  position?:'bottom' | 'left' | 'right' | 'custom';
  target?: string;
}

const ExperienceJourneyCard: React.FC<ExperienceJourneyCardProps> = ({
  imgSrc,
  title,
  btnLink,
  btnLabel,
  content,
  position,
  target,
}) => {
  const isCustom = useMemo(() => position === 'custom', [position]);
  const customText = useMemo(() => {
    if (position === 'custom') {
      const arr = title?.split(' ');
      const mid = arr ? arr?.length / 2 : 0;

      if (mid) {
        return {
          left: arr?.slice(0, mid).join(' '),
          right: arr?.slice(mid).join(' '),
        };
      }
    }
    return {
      left: '',
      right: '',
    };
  }, [position, title]);

  return (
    <div className={mapModifiers('m-experience-journey-card', position)}>
      <div className="m-experience-journey-card_image">
        <Image imgSrc={imgSrc || ''} ratio="16x9" size="cover" />
        {isCustom && (
          <>
            <div className="m-experience-journey-card_inner">
              <Heading type="h2" modifiers={['700', 'uppercase', 's005', 'white']}>
                {customText.left}
              </Heading>
            </div>
            <div className="m-experience-journey-card_outer">
              <Heading type="h2" modifiers={['700', 'uppercase', 's005', 'cyanCobaltBlue']}>
                {customText.right}
              </Heading>
            </div>
          </>
        )}
      </div>
      <div className="m-experience-journey-card_content">
        <div className="m-experience-journey-card_title">
          <Heading type="h2" modifiers={['700', 'uppercase', 's005', 'white']}>
            {title}
          </Heading>
        </div>
        <div className="m-experience-journey-card_info">
          <ExperienceTextCard
            btnLink={btnLink}
            btnLabel={btnLabel}
            content={content}
            target={target}
          />
        </div>
      </div>
    </div>
  );
};

ExperienceJourneyCard.defaultProps = {
  position: 'right',
};

export default ExperienceJourneyCard;
