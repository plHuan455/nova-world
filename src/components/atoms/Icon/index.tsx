import React from 'react';

import mapModifiers from 'utils/functions';

export const iconList = {
  search: 'search',
  loadingWhite: 'loadingWhite',
  arrowPrevArsenic: 'arrowPrevArsenic',
  marker: 'marker',
  clock: 'clock',
};

export type IconName = keyof typeof iconList;

type Props = {
  iconName: IconName;
};

const Icon: React.FC<Props> = ({ iconName }) => (
  <i className={mapModifiers('a-icon', iconName)} />
);

export default Icon;
