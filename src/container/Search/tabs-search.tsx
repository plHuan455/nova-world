import React, { useState } from 'react';

import { Tab, TabsScroll, TabButton } from 'components/organisms/Tabs';

type siteNameType = {
  label: string,
  value: string,
}

type moduleNameType = {
  id: number,
  title: string,
  slug: string,
}

interface TabsFirstSearchProps {
  handleClick: (index: number)=>void;
  siteName: siteNameType[];
}

interface TabsSecondSearchProps {
  handleClick: (index: number)=>void;
  moduleName: moduleNameType[];
}

export const TabsFirst: React.FC<TabsFirstSearchProps> = ({
  handleClick,
  siteName,
}) => {
  const [tabActive, setTabActive] = useState(0);
  return (
    <TabsScroll variableMutate={tabActive}>
      {
          siteName.map((ele, idx) => (
            <Tab
              labelColor="cyanCobaltBlue"
              key={`tab-${idx.toString()}`}
              active={idx === tabActive}
              label={ele.label}
              handleClick={() => {
                setTabActive(idx);
                if (handleClick) handleClick(idx);
              }}
            />
          ))
        }
    </TabsScroll>
  );
};

export const TabsSecond: React.FC<TabsSecondSearchProps> = ({
  handleClick,
  moduleName,
}) => {
  const [tabActive, setTabActive] = useState(0);
  return (
    <TabsScroll classTabsActive=".o-tabs_tab-button-active" variableMutate={tabActive}>
      {
          moduleName.map((ele, idx) => (
            <TabButton
              key={`tab-${idx.toString()}`}
              active={idx === tabActive}
              label={ele.title}
              handleClick={() => {
                setTabActive(idx);
                if (handleClick) handleClick(idx);
              }}
            />
          ))
        }
    </TabsScroll>
  );
};
