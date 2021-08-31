import React, { useRef } from 'react';

import useScrollAnimate from 'hooks/useScrollAnimation';

interface AnimateProps {
  extendClassName?: string;
  type?: 'slideInLeft' | 'slideInRight' | 'fadeInUp';
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
