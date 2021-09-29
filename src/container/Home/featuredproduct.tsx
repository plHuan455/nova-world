import React, { useMemo } from 'react';

import FeaturedProduct from 'components/templates/FeaturedProduct';
import useCallService from 'hooks/useCallService';
import getProductService from 'services/product';
import { getImageURL } from 'utils/functions';

type FeaturedProductProps = {
  data?: HomeBlockSection4;
}

const FeaturedProductHome:React.FC<FeaturedProductProps> = ({
  data,
}) => {
  const dataProducts = useCallService(() => getProductService({ is_featured: '1' }));

  const listCard = useMemo(() => dataProducts.data?.data.map((item) => ({
    title: item?.title || '',
    titleSub: item?.subTitle || '',
    imgSrc: getImageURL(item?.thumbnail),
    href: item?.link || '',
    target: item?.linkTarget,
  })), [dataProducts]);

  return (
    <FeaturedProduct
      title={data?.title || ''}
      data={listCard || []}
    />
  );
};
export default FeaturedProductHome;
