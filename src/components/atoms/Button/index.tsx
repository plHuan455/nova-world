import React from 'react';

import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import mapModifiers from 'utils/functions';

interface ButtonProps {
  modifiers?: 'normal' | 'android-green';
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  isBorderWhite?: boolean;
  handleClick?: () => void;
  href?: string;
  target?: string;
  useLink?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  modifiers,
  loading,
  isBorderWhite,
  handleClick,
  href,
  target,
  useLink,
}) => {
  if (useLink) {
    return (
      <Link
        extendsClass={mapModifiers('a-button', modifiers, isBorderWhite && 'border')}
        href={href || ''}
        target={target}
      >
        { children }
      </Link>
    );
  }
  return (
  /* eslint-disable react/button-has-type */
    <button
      className={mapModifiers('a-button', modifiers, loading && 'loading', isBorderWhite && 'border')}
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
};

Button.defaultProps = {
  modifiers: 'normal',
  type: 'button',
};

export default Button;
