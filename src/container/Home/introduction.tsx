import React from 'react';

import dataIntro from 'assets/dataDummy/introduction';
import IntroductionHome from 'components/templates/IntroductionHome';

const Introduction: React.FC = () => (
  <IntroductionHome data={dataIntro.cardIntro} />
);

export default Introduction;
