import React from 'react';

import mapModifiers from 'utils/functions';

export type Sizes = '12x18' | '11x18' | '14x21' | '18x24' | '18x27' | '20x30' | '22x32' | '22x36' | '24x36' | '20x36' | '12x21';

export type TextModifiers = (GeneralTextStyle | Sizes)[]

export interface TextProps {
  modifiers?: (GeneralTextStyle | Sizes)[];
  type?: 'p' | 'span' | 'div';
}

const Text: React.FC<TextProps> = ({
  modifiers,
  type = 'p',
  children,
}) => {
  const Element = type;
  return (
    <Element className={mapModifiers('a-text', modifiers)}>
      {children}
    </Element>
  );
};

export default Text;
