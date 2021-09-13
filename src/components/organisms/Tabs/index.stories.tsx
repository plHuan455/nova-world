/* eslint-disable react-hooks/rules-of-hooks */
import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import Tabs, { Panel, Tab } from '.';

export default {
  title: 'Components/organisms/Tabs',
  component: Tabs,
  argTypes: {},
} as Meta;

const listLabel = ['Tin dự án', 'Tin thị trường', 'Tin tập đoàn'];
const listPanel = ['Nội dung tin dự án', 'Nội dung tin thị trường', 'Nội dung tin tập đoàn'];

export const normal: Story = () => {
  const [indexActive, setIndexActive] = useState(0);
  return (
    <div style={{
      padding: '50px 0',
      backgroundColor: '#269947',
    }}
    >
      <Tabs slidesToShow={listLabel.length}>
        {listLabel.map((item, index) => (
          <Tab
            key={`tab-${index.toString()}`}
            active={index === indexActive}
            label={item}
            labelColor="cyanCobaltBlue"
            handleClick={() => setIndexActive(index)}
          />
        ))}
      </Tabs>

      <br />

      {listPanel.map((item, index) => (
        <Panel
          key={`panel-${index.toString()}`}
          active={indexActive === index}
        >
          {item}
        </Panel>
      ))}
    </div>
  );
};
