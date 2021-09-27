import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/Product';

const Product: React.FC<BasePageData<ProductPage>> = (props) => (
  <div className="p-product">
    <MainLayout>
      <Screen {...props} />
    </MainLayout>
  </div>
);

export default Product;
