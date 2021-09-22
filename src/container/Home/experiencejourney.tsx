import React from 'react';

import dataExperienceJourney from 'assets/dataDummy/experiencejourney';
import ExperienceJourney from 'components/templates/ExperienceJourney';
import { HomeBlock } from 'services/home/types';

type ExperienceJourneyHomeProps = {
  data?: HomeBlock
}

const ExperienceJourneyHome: React.FC<ExperienceJourneyHomeProps> = ({
  data,
}) => (
  <ExperienceJourney
    title={data?.title}
    dataExperienceJourney={dataExperienceJourney}
  />
);

export default ExperienceJourneyHome;
