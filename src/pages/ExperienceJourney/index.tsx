import React from 'react';

import Screen from 'container/ExperienceJourney';

const ExperienceJourney: React.FC<BasePageData<JourneysPage>> = (props) => (
  <div className="p-experience-journey">
    <Screen {...props} />
  </div>
);

export default ExperienceJourney;
