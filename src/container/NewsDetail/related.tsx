import React from 'react';

import Heading from 'components/atoms/Heading';
import NewsCard from 'components/molecules/NewsCard';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import { RelatedNewsData } from 'services/newsDetail/types';
import { useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';

interface RelatedProps {
  data?: RelatedNewsData[]
}

const Related: React.FC<RelatedProps> = ({ data }) => {
  const {
    menu: { prefix },
  } = useAppSelector((state) => state);

  if (!data?.length) return null;

  return (
    <Container>
      <Animate type="fadeInUp" extendClassName="p-newsdetail_related">
        <div className="divider" />
        <div className="title">
          <Heading type="h2" modifiers={['500', 'cyanCobaltBlue', 'uppercase', 'center']}>
            TIN TỨC LIÊN QUAN
          </Heading>
        </div>
        <div className="list">
          {data.slice(0, 3).map((item, index) => (
            <div className="item" key={`_newcard${String(index)}`}>
              <NewsCard
                imgSrc={getImageURL(item.thumbnail)}
                direction={index === 0 ? 'vertical' : 'horizontal'}
                ratio={index === 0 ? '644x323' : '450x248'}
                href={prefix?.newsDetail + item.slug}
                updatedate={index === 0 ? item.publishedAt : ''}
                title={item.title}
                desc={index === 0 ? item.description : ''}
              />
            </div>
          ))}
        </div>
      </Animate>
    </Container>
  );
};

export default Related;
