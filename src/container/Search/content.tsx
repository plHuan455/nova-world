import React from 'react';

import Button from 'components/atoms/Button';
import Loading from 'components/atoms/Loading';
import Card, { CardProps } from 'components/molecules/Card';

interface ContentProps {
  listCard: CardProps[];
  isLoading?: boolean;
  buttonName?: string;
  handleClick?: () => void;
}

const Content:React.FC<ContentProps> = ({
  listCard,
  isLoading,
  buttonName,
  handleClick,
}) => (
  <>
    <div className="list">
      {listCard.map((item, index) => (
        <div
          className="item"
          key={`_card${String(index)}`}
        >
          <Card {...item} />
        </div>
      ))}
    </div>
    { isLoading && <Loading modifiers={['blue']} />}
    {!isLoading && listCard.length > 0 && buttonName && (
    <div className="button-show">
      <Button
        handleClick={handleClick}
      >
        {buttonName}
      </Button>
    </div>
    )}
  </>
);

export default Content;
