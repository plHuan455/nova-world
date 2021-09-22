import React from 'react';

import Screen from 'container/Contact';

const Contact: React.FC<BasePageData<ContactPage>> = (props) => (
  <div className="p-contact">
    <Screen {...props} />
  </div>
);

export default Contact;
