import React from 'react';

import mapModifiers from 'utils/functions';

type Size = 'xs';

interface HeadingProps {
  type: 'h1' | 'h2' | 'h6';
  modifiers?: (Size | GeneralTextStyle)[];
}

const Heading: React.FC<HeadingProps> = ({
  type, modifiers, children,
}) => {
  const Element = type;

  return (
    <Element className={mapModifiers('a-heading', type, modifiers)}>
      {children}
    </Element>
  );
};

Heading.defaultProps = {
  modifiers: ['500', 'cyanCobaltBlue', 'uppercase', 'center'],
};

export default Heading;
