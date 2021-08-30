import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import dataExperienceJourney from 'assets/dataDummy/experiencejourney';
import ExperienceJourney from 'components/templates/ExperienceJourney';

const ExperienceJourneyContainer: React.FC = () => (
  <Router>
    <ExperienceJourney
      title="HÀNH TRÌNH TRẢI NGHIỆM"
      dataExperienceJourney={dataExperienceJourney}
    />
  </Router>
);

export default ExperienceJourneyContainer;
