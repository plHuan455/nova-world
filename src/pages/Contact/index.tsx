import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/Contact';

const Contact: React.FC<BasePageData<ContactPage>> = (props) => (
  <div className="p-contact">
    <MainLayout>
      <Screen {...props} />
    </MainLayout>
  </div>
);

export default Contact;
