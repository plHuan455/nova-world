import React, { useRef } from 'react';

import useScrollAnimate from 'hooks/useScrollAnimation';

type AnimateType =
  | 'zoomIn'
  | 'move'
  | 'fadeInBlur'
  | 'animationFramesLeft'
  | 'animationFramesRight'
  | 'beatSmall'
  | 'fadeInUp'
  | 'slideInLeft'
  | 'slideInRight'
  | 'scaleX'
  | 'scaleY';

interface AnimateProps {
  extendClassName?: string;
  type?: AnimateType;
}

const Animate: React.FC<AnimateProps> = ({
  children,
  extendClassName,
  type,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const animate = useScrollAnimate(ref);
  return (
    <div ref={ref} className={animate ? `${extendClassName} animate animate-${type || ''}` : `${extendClassName} preanimate`}>
      {children}
    </div>
  );
};

export default Animate;
