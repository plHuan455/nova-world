import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/Product';

const Product: React.FC = () => (
  <div className="p-product">
    <MainLayout>
      <Screen />
    </MainLayout>
  </div>
);

export default Product;
