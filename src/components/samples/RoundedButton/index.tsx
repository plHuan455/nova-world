import './index.scss';

import React from 'react';

interface RoundedButtonProps {
  /** Color description */
  color: 'string';
  style?: React.CSSProperties;
  onClick: () => void;
  children: React.ReactNode;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  color, style,
  onClick,
  children,
}: RoundedButtonProps) => (
  <button
    type="button"
    className="RoundedButton"
    style={{
      backgroundColor: color,
      ...style,
    }}
    onClick={() => onClick()}
  >
    {children}
  </button>
);

RoundedButton.defaultProps = {
  style: undefined,
};

export default RoundedButton;
