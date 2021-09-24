import React from 'react';

import dummyData from 'assets/dataDummy/featuredProduct';
import FeaturedProduct from 'components/templates/FeaturedProduct';
// import { getImageURL } from 'utils/functions';

type FeaturedProductProps = {
  data?: HomeBlockSection4;
}

const FeaturedProductHome:React.FC<FeaturedProductProps> = ({
  data,
}) => (
  <FeaturedProduct
    title={data?.title || ''}
    data={dummyData.cardFeatured}
  />
);
export default FeaturedProductHome;
