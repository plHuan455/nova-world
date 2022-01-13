import React from 'react';

import Button from 'components/atoms/Button';
import Text from 'components/atoms/Text';

interface ExperienceTextCardProps {
  btnLink?: string;
  btnLabel?: string;
  content?: string;
  target?: string;
}

const ExperienceTextCard: React.FC<ExperienceTextCardProps> = ({
  content,
  btnLink,
  btnLabel,
  target,
}) => (
  <div className="m-exptextcard">
    <div className="m-exptextcard_content">
      <div className="m-exptextcard_detail">
        <Text modifiers={['400', 'white']}>
          {content}
        </Text>
      </div>
      <div className="m-exptextcard_btn">
        <Button
          useLink
          type="button"
          href={btnLink}
          target={target}
          modifiers="normal"
          isBorderWhite
        >
          {btnLabel}
        </Button>
      </div>
    </div>
  </div>
);

export default ExperienceTextCard;
