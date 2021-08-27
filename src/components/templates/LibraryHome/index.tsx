import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface LibraryCard {
  title: string;
  thumbnail: string;
  alt?: string;
  href: string;
}

export interface LibraryHomeProps {
  data?: LibraryCard[];
}

const LibraryHome: React.FC<LibraryHomeProps> = ({ data }) => {
  const [idx, setIdx] = useState(0);

  return (
    <div className="t-libraryhome">
      <div className="t-libraryhome-title">
        <Heading type="h2" modifiers={['cyanCobaltBlue', '500']}>
          THƯ VIỆN
          <Divider />
        </Heading>
      </div>
      <div className="t-libraryhome-content">
        {data?.map((item, index) => (
          <Link
            to={item.href}
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
      </div>
    </div>
  );
};

export default LibraryHome;
