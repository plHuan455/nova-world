/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import Slider, { ResponsiveObject } from 'react-slick';

import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

interface TabsProps {
  responsive?: ResponsiveObject[];
  tabActive?: number;
  slidesToShow?: number;
}

interface TabProps {
  label?: string;
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
  active,
  handleClick,
}) => (
  <div
    onClick={handleClick}
    className={mapModifiers('o-tabs_tab', active && 'active')}
  >
    <Text modifiers={['20x32', 'sm', 'uppercase', 'white', 's005']}>
      {label}
    </Text>
  </div>
);

const Tabs: React.FC<TabsProps> = ({
  responsive,
  children,
  slidesToShow,
  tabActive,
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
    responsive,
  };

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (sliderRef.current && tabActive) {
      sliderRef.current.slickGoTo(tabActive);
    }
  }, [tabActive, sliderRef]);

  return (
    <div className="o-tabs">
      <Slider ref={sliderRef} centerPadding="0" {...settings}>
        {children}
      </Slider>
    </div>
  );
};

Tabs.defaultProps = {
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
