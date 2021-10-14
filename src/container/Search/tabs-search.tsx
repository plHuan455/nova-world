import React from 'react';

import { Tab, TabsScroll, TabButton } from 'components/organisms/Tabs';

const labelsFirst = ['Tất cả', 'NOVAWORLD HOTRAM', 'HABANA', 'MORITO', 'TROPICANA', 'WONDERLAND'];
const labelsSecond = ['Tin Tức', 'Tiện Ích', 'Sản Phẩm'];

interface TabsSearchProps {
  indexActive: number;
  handleClick: (index: number)=>void;
}

export const TabsFirst: React.FC<TabsSearchProps> = ({
  indexActive,
  handleClick,
}) => (
  <TabsScroll variableMutate={indexActive}>
    {
        labelsFirst.map((ele, idx) => (
          <Tab
            labelColor="cyanCobaltBlue"
            key={`tab-${idx.toString()}`}
            active={idx === indexActive}
            label={ele}
            handleClick={() => handleClick(idx)}
          />
        ))
      }
  </TabsScroll>
);

export const TabsSecond: React.FC<TabsSearchProps> = ({
  indexActive,
  handleClick,
}) => (
  <TabsScroll classTabsActive=".o-tabs_tab-button-active" variableMutate={indexActive}>
    {
        labelsSecond.map((ele, idx) => (
          <TabButton
            key={`tab-${idx.toString()}`}
            active={idx === indexActive}
            label={ele}
            handleClick={() => handleClick(idx)}
          />
        ))
      }
  </TabsScroll>
);
