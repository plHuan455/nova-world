import React from 'react';

import mapModifiers from 'utils/functions';

type CustomSize = 'xs'| 'sm' | 'md';

type Sizes = '48x56'| '32x48'| '20x32'| '20x24'| '16x19'| '14x21' | '12x21' | '24x24' | '48x24' | '40x60';

export type TextModifiers = (GeneralTextStyle | Sizes | CustomSize)[];

export interface TextProps {
  modifiers?: TextModifiers;
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
