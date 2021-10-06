import React, { useState } from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import mapModifiers from 'utils/functions';

export interface LibraryCard {
  id: number;
  title: string;
  thumbnail: string;
  alt?: string;
  href: string;
}

export interface LibraryHomeProps {
  data?: LibraryCard[];
  title?: string;
}

const LibraryHome: React.FC<LibraryHomeProps> = ({ data, title }) => {
  const [idx, setIdx] = useState(0);

  return (
    <div className="t-libraryhome">
      <Animate
        extendClassName="t-libraryhome-title"
        type="beatSmall"
      >
        <Heading type="h2" modifiers={['cyanCobaltBlue', '500']}>
          {title}
          <Divider />
        </Heading>
      </Animate>
      <Animate
        extendClassName="t-libraryhome-content"
        type="animationFramesLeft"
      >
        {data?.map((item, index) => (
          <Link
            href={item.href}
            state={{ id: item.id }}
            key={`librarycard${String(index)}`}
            className={mapModifiers('t-libraryhome-link', idx === index && 'active')}
            onMouseEnter={() => setIdx(index)}
          >
            <div className="t-libraryhome-card" style={{ backgroundImage: `url(${item.thumbnail})` }}>
              <Text type="p" modifiers={['s005', 'white', 'uppercase', '500', '20x32', 'center']}>
                {item.title}
              </Text>
            </div>
          </Link>
        ))}
      </Animate>
    </div>
  );
};

export default LibraryHome;
