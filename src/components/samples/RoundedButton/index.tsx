import React from "react";
import { ColorProperty } from "csstype";

import "./index.scss";

interface RoundedButtonProps {
  /** Color description */
  color: ColorProperty;
  style?: React.CSSProperties;
  onClick: () => void;
  children: React.ReactNode;
}

const RoundedButton: React.FC<RoundedButtonProps> = (props: RoundedButtonProps) => {
  return (
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
};

RoundedButton.defaultProps = {
  style: undefined,
};

export default RoundedButton;
