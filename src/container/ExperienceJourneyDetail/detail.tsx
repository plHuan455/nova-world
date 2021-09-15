import React, { useState } from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import Tabs, { Panel, Tab } from 'components/organisms/Tabs';

interface DetailProps{
  labels:string[];
  panel:{
    title?:string;
    content?:string;
    publishedAt?:string;
    subTitle?:string;
  }[]
}

const responsive = [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      infinite: true,
    },
  },
];

const Detail:React.FC<DetailProps> = ({
  labels,
  panel,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  return (
    <div className="p-experience-journey-detail_wrap-content">
      <div className="p-experience-journey-detail_leaf-top" />
      <div className="p-experience-journey-detail_leaf-bottom" />
      <Container>
        <Animate type="beatSmall" extendClassName="p-experience-journey-detail_title">
          <Heading type="h2">
            HÀNH TRÌNH TRẢI NGHIỆM
            <Divider />
          </Heading>
        </Animate>
        <Animate
          type="animationFramesLeft"
          extendClassName="p-experience-journey-detail_tabs"
        >
          <Tabs breakCenterMode="tablet-up" responsive={responsive} slidesToShow={labels.length}>
            {
            labels.map((ele, idx) => (
              <Tab
                labelColor="cyanCobaltBlue"
                key={`tab-${idx.toString()}`}
                active={idx === indexActive}
                label={ele}
                handleClick={() => setIndexActive(idx)}
              />
            ))
          }
          </Tabs>
        </Animate>
        <Animate
          type="zoomIn"
          extendClassName="p-experience-journey-detail_panel-content"
        >
          {
          panel.map((item, index) => (
            <div
              key={`item-${index.toString()}`}
              className="p-experience-journey-detail_panel-item"
            >
              <Panel
                key={`panel-${index.toString()}`}
                active={indexActive === index}
              >
                <div className="p-experience-journey-detail_panel-sub-title">
                  <Text modifiers={['cyanCobaltBlue']}>
                    {item.subTitle}
                  </Text>
                </div>
                <div className="p-experience-journey-detail_panel-title">
                  <Heading type="h5" modifiers={['cyanCobaltBlue', '500']}>
                    {item.title}
                  </Heading>
                </div>
                <div className="p-experience-journey-detail_panel-publish">
                  <Icon iconName="clock" />
                  <Text>
                    {item.publishedAt}
                  </Text>
                </div>
                <div className="p-experience-journey-detail_panel-content">
                  <Text innerHTML={item.content} />
                </div>
              </Panel>
            </div>
          ))
        }
        </Animate>
      </Container>
    </div>
  );
};

export default Detail;
