import React from 'react';

import Text from '../Text';

import mapModifiers from 'utils/functions';

interface TagProps {
  isActive?: boolean;
  handleClick?: () => void;
}

const Tag: React.FC<TagProps> = ({ isActive, children, handleClick }) => (
  <button
    type="button"
    className={mapModifiers('a-tag', isActive && 'active')}
    onClick={handleClick}
  >
    <Text type="span" modifiers={['400']}>
      {children}
    </Text>
  </button>
);

export default Tag;
