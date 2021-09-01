import React from 'react';

import dataExperienceJourney from 'assets/dataDummy/experiencejourney';
import ExperienceJourney from 'components/templates/ExperienceJourney';

const ExperienceJourneyHome: React.FC = () => (
  <ExperienceJourney
    title="HÀNH TRÌNH TRẢI NGHIỆM"
    dataExperienceJourney={dataExperienceJourney}
  />
);

export default ExperienceJourneyHome;
