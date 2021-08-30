import React from 'react';

import dataDivergences from 'assets/dataDummy/divergences';
import Divergences from 'components/templates/Divergences';

const DivergencesHome: React.FC = () => (
  <Divergences
    title="CÁC PHÂN KỲ"
    data={dataDivergences}
  />
);

export default DivergencesHome;
