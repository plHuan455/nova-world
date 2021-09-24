import React from 'react';

import IntroductionHome from 'components/templates/IntroductionHome';

type IntroductionProps = {
  data?: HomeBlockSection1;
}

const Introduction: React.FC<IntroductionProps> = ({
  data,
}) => (
  <IntroductionHome
    title={data?.title}
    description={data?.description}
    image={data?.image || []}
  />
);

export default Introduction;
