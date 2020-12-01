import './index.scss';

import { Property } from 'csstype';
import React from 'react';

interface RoundedButtonProps {
  /** Color description */
  color: Property.BackgroundColor;
  style?: React.CSSProperties;
  onClick: () => void;
  children: React.ReactNode;
}

const RoundedButton: React.FC<RoundedButtonProps> = (props: RoundedButtonProps) => (
  <button
    className="RoundedButton"
    style={{
      backgroundColor: props.color,
    }}
    onClick={() => props.onClick()}
  >
    {props.children}
  </button>
);

RoundedButton.defaultProps = {
  style: undefined,
};

export default RoundedButton;
