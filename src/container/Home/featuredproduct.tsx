import React from 'react';

import dummyData from 'assets/dataDummy/featuredProduct';
import FeaturedProduct from 'components/templates/FeaturedProduct';

const FeaturedProductHome:React.FC = () => (
  <FeaturedProduct data={dummyData.cardFeatured} />
);

export default FeaturedProductHome;
