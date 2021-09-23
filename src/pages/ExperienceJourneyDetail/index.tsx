import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import Screen from 'container/ExperienceJourneyDetail';

const ExperienceJourneyDetail: React.FC = () => (
  <div className="p-experience-journey-detail">
    <MainLayout>
      <Screen />
    </MainLayout>
  </div>
);

export default ExperienceJourneyDetail;
