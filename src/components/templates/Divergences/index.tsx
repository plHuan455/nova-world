import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

type DivergencesCardType = {
  srcLogo?: string;
  title?: string;
  numberPart?:number;
  numberTotal?:number;
  description?:string;
  link?: string;
  textLink?: string;
}

export const DivergencesCard:React.FC<DivergencesCardType> = ({
  srcLogo,
  title,
  numberPart = 0,
  numberTotal = 0,
  description,
  link = '/',
  textLink = 'Khám phá ngay',
}) => {
  const firstNumber = useMemo(() => (numberPart > 10 ? numberPart : `0${numberPart || ''}`), [numberPart]);
  const secondNumber = useMemo(() => (numberTotal > 10 ? numberTotal : `0${numberTotal || ''}`), [numberTotal]);
  return (
    <div className="t-divergences_card">
      {srcLogo
      && (
      <div className="t-divergences_card_branch">
        <Image ratio="126x30" imgSrc={srcLogo} />
      </div>
      )}
      <div className="t-divergences_card_title">
        <Heading type="h6" modifiers={['500', 'cyanCobaltBlue', 'uppercase']}>
          {title}
        </Heading>
        <div className="t-divergences_card_part">
          <Text modifiers={['32x48', 'cyanCobaltBlue']}>
            {firstNumber}
            <span>{`/${secondNumber}`}</span>
          </Text>
        </div>
      </div>
      <div className="t-divergences_card_description">
        {description}
      </div>
      <div className="t-divergences_card_link">
        <Link to={link}>
          <Text modifiers={['cyanCobaltBlue', 'underline', '700']}>
            {textLink}
          </Text>
        </Link>
      </div>
    </div>
  );
};

interface DivergencesProps {
}

const Divergences: React.FC<DivergencesProps> = ({ children }) => (
  <div>{children}</div>
);

Divergences.defaultProps = {
};

export default Divergences;
