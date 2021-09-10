import React from 'react';

import mapModifiers from 'utils/functions';

interface LoadingProps {
  modifiers?: ('white' | 'green' | 'fixed' | 'small')[];
}

const Loading: React.FC<LoadingProps> = ({ modifiers }) => (
  <div className={mapModifiers('a-loading', modifiers)} />
);

Loading.defaultProps = {
};

export default Loading;
