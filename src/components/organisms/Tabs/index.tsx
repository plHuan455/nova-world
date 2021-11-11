import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Slider, { ResponsiveObject } from 'react-slick';

import Text from 'components/atoms/Text';
import mapModifiers, { handleScrollCenter } from 'utils/functions';

interface TabsProps {
  responsive?: ResponsiveObject[];
  tabActive?: number;
  slidesToShow?: number;
  breakCenterMode?: 'mobile-up' | 'tablet-up';
}

interface TabProps {
  label?: string;
  labelColor?: 'white' | 'cyanCobaltBlue'
  active?: boolean;
  handleClick?: () => void;
}

interface PanelProps {
  active?: boolean;
}

export const Panel: React.FC<PanelProps> = ({
  active,
  children,
}) => (
  <div className={mapModifiers('o-tabs_panel', active && 'active')}>
    {children}
  </div>
);

export const Tab: React.FC<TabProps> = ({
  label,
  labelColor = 'white',
  active,
  handleClick,
}) => (
  <div
    onClick={handleClick}
    className={mapModifiers('o-tabs_tab', active && 'active', labelColor)}
  >
    <Text modifiers={['20x32', 'sm', 'uppercase', labelColor, 's005']}>
      {label}
    </Text>
  </div>
);

export const TabButton: React.FC<TabProps> = ({
  label,
  active,
  handleClick,
}) => (
  <button
    type="button"
    onClick={handleClick}
    className={mapModifiers('o-tabs_tab-button', active && 'active')}
  >
    {label}
  </button>
);

type TabsScrollProps = {
  variableMutate?: string|number;
  classTabsActive?: string;
}

export const TabsScroll:React.FC<TabsScrollProps> = ({
  children,
  variableMutate,
  classTabsActive,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    handleScrollCenter(ref, classTabsActive || '.o-tabs_tab-active');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variableMutate]);

  return (
    <div ref={ref} className={mapModifiers('o-tabs-scroll')}>
      {children}
    </div>
  );
};

const Tabs: React.FC<TabsProps> = ({
  responsive,
  children,
  slidesToShow,
  tabActive,
  breakCenterMode,
}) => {
  const settings = {
    className: 'slider variable-width',
    arrows: false,
    dots: false,
    slidesToShow: slidesToShow || 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    infinite: false,
    centerPadding: '0',
    responsive,
  };

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (sliderRef.current && tabActive) {
      sliderRef.current.slickGoTo(tabActive);
    }
  }, [tabActive, sliderRef]);

  return (
    <div className={mapModifiers('o-tabs', breakCenterMode)}>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

Tabs.defaultProps = {
  breakCenterMode: 'mobile-up',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
      },
    },
  ],
};

export default Tabs;
