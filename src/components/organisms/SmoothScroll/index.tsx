import React, {
  useEffect, useRef,
} from 'react';

const SmoothScroll: React.FC = ({ children }) => {
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
    const resizeObserver = new ResizeObserver((entries) => {
      document.body.style.height = `${entries[0].target.clientHeight}px`;
    });
    const entry = scrollingContainerRef.current as Element;

    // start observing a DOM node
    resizeObserver.observe(entry);
    return () => {
      resizeObserver.unobserve(entry);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    }

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className="o-smoothscroll">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
