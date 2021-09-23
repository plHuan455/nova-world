import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/ExperienceJourney';

const ExperienceJourney: React.FC<BasePageData<JourneysPage>> = (props) => (
  <div className="p-experience-journey">
    <MainLayout>
      <Screen {...props} />
    </MainLayout>
  </div>
);

export default ExperienceJourney;
