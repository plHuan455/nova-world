import React from 'react';

import Icon from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

interface ButtonProps {
  modifiers?: 'normal';
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  modifiers,
  loading,
  handleClick,
}) => (
  /* eslint-disable react/button-has-type */
  <button
    className={mapModifiers('a-button', modifiers, loading && 'loading')}
    onClick={handleClick}
    type={type}
    disabled={disabled}
  >
    {loading ? (
      <div className="a-button_loading-icon">
        <Icon iconName="loadingWhite" />
      </div>
    ) : (
      <>
        { children }
      </>
    )}
  </button>
);

Button.defaultProps = {
  modifiers: 'normal',
  type: 'button',
};

export default Button;