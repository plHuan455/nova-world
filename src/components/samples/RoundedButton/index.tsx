import React from "react";
import { ColorProperty } from "csstype";

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
      style={{
        backgroundColor: props.color,
        border: "none",
        color: "white",
        padding: 20,
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        borderRadius: 5
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
