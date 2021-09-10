import React from 'react';

import mapModifiers from 'utils/functions';

type CustomSize = 'xs'| 'sm' | 'md';

type Sizes = '48x56'| '32x48'| '20x32'| '20x30' | '20x24'| '16x19'| '14x21' | '12x21' | '24x32' | '48x24' | '40x60';

export type TextModifiers = (GeneralTextStyle | Sizes | CustomSize)[];

export interface TextProps {
  modifiers?: TextModifiers;
  type?: 'p' | 'span' | 'div';
  innerHTML?: string;
}

const Text: React.FC<TextProps> = ({
  modifiers,
  type = 'p',
  children,
  innerHTML,
}) => {
  const Element = type;
  return innerHTML ? (
    <div className={mapModifiers('a-text', modifiers)} dangerouslySetInnerHTML={{ __html: innerHTML || '' }} />
  ) : (
    <Element className={mapModifiers('a-text', modifiers)}>
      {children}
    </Element>
  );
};

export default Text;
