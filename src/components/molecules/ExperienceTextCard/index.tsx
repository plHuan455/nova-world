import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/atoms/Button';
import Text from 'components/atoms/Text';

interface ExperienceTextCardProps {
  btnLink?: string;
  btnLabel?: string;
  content?: string;
}

const ExperienceTextCard: React.FC<ExperienceTextCardProps> = ({ content, btnLink, btnLabel }) => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    if (btnLink) {
      history.push({
        pathname: btnLink,
      });
    }
  }, [btnLink, history]);

  return (
    <div className="m-exptextcard">
      <div className="m-exptextcard_content">
        <Text modifiers={['400', 'white']}>
          {content}
        </Text>
        <div className="m-exptextcard_btn">
          <Button type="button" handleClick={handleClick} modifiers="normal" isBorderWhite>
            {btnLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTextCard;
