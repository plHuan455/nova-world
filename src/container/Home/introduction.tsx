import React from 'react';

import dataIntro from 'assets/dataDummy/introduction';
import IntroductionHome from 'components/templates/IntroductionHome';
import { HomeBlock } from 'services/home/types';

type IntroductionProps = {
  data?:HomeBlock;
}

const Introduction: React.FC<IntroductionProps> = ({
  data,
}) => (
  <IntroductionHome
    title={data?.title}
    data={dataIntro.cardIntro}
  />
);

export default Introduction;
