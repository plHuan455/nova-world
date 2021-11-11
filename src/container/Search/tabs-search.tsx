import React, { useState, useEffect } from 'react';

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
  currentModuleIdx?: number;
  argMutable?: string;
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
  currentModuleIdx = 0,
  argMutable = '',
}) => {
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    if (currentModuleIdx) setTabActive(currentModuleIdx);
  }, [currentModuleIdx]);

  useEffect(() => {
    if (argMutable) {
      setTabActive(0);
    }
  }, [argMutable]);

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
