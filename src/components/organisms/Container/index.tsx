import React from 'react';

import mapModifiers from 'utils/functions';

interface ContainerProps {
  fullScreen?: boolean;
  paddingHalf?: boolean;
  noPaddingRight?: boolean;
  noPaddingLeft?: boolean;
  noPaddingRightDesktop?: boolean;
  noPaddingRightDesktopLarge?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  fullScreen,
  paddingHalf,
  noPaddingRight,
  noPaddingLeft,
  noPaddingRightDesktop,
  noPaddingRightDesktopLarge,
  children,
}) => (
  <div
    className={`container ${mapModifiers(
      'o-container',
      fullScreen && 'fullscreen',
      paddingHalf && 'paddingHalf',
      noPaddingRight && 'noPaddingRight',
      noPaddingLeft && 'noPaddingLeft',
      noPaddingRightDesktop && 'noPaddingRightDesktop',
      noPaddingRightDesktopLarge && 'noPaddingRightDesktopLarge',
    )}`}
  >
    {children}
  </div>
);

export default Container;
