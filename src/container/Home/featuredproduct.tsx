import React, { useMemo } from 'react';

import FeaturedProduct from 'components/templates/FeaturedProduct';
import { HomeBlock } from 'services/home/types';
import { getImageURL } from 'utils/functions';

type FeaturedProductProps = {
  data?:HomeBlock;
}

const FeaturedProductHome:React.FC<FeaturedProductProps> = ({
  data,
}) => {
  const listCard = useMemo(() => {
    if (!data || !data.item) return [];
    return data.item.map((item) => ({
      imgSrc: getImageURL(item.image),
      title: item.title || '',
      titleSub: item.description || '',
    }));
  }, [data]);

  return (
    <FeaturedProduct
      title={data?.title}
      data={listCard}
    />
  );
};

export default FeaturedProductHome;
