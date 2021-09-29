import React from 'react';

import mapModifiers from 'utils/functions';

interface LoadingProps {
  modifiers?: ('white' | 'blue' | 'fixed' | 'small' | 'page')[];
}

const Loading: React.FC<LoadingProps> = ({ modifiers }) => (
  <div className={mapModifiers('a-loading', modifiers)} />
);

Loading.defaultProps = {
};

export default Loading;
