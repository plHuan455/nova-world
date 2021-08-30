import React, { useRef, useState } from 'react';

import Text from 'components/atoms/Text';
import NewsCard, { NewsCardProps } from 'components/molecules/NewsCard';
import Container from 'components/organisms/Container';
import Tabs, { Panel, Tab } from 'components/organisms/Tabs';
import useScrollAnimate from 'hooks/useScrollAnimation';

export interface NewsHomeTabProps {
  titleTab: string;
  dataNewsHome: NewsCardProps[];
}

interface NewsHomeProps {
  title: string;
  tabDataNewsHome: NewsHomeTabProps[];
}

const NewsHome: React.FC<NewsHomeProps> = ({ title, tabDataNewsHome }) => {
  const ref = useRef<HTMLDivElement>(null);
  const animate = useScrollAnimate(ref);
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div className="t-newshome">
      <div className={animate ? 't-newshome_wrap animate animate-fadeInUp' : 't-newshome_wrap preanimate'}>
        <Container fullScreen paddingHalf>
          <div className="t-newshome_title">
            <Text modifiers={['40x60', '500', 's005', 'white', 'center', 'uppercase']}>
              {title}
            </Text>
          </div>
          <div className="t-newshome_tabs">
            <Tabs slidesToShow={tabDataNewsHome.length}>
              {
                tabDataNewsHome.map((ele, idx) => (
                  <Tab
                    key={`tab-${idx.toString()}`}
                    active={idx === indexActive}
                    label={ele.titleTab}
                    handleClick={() => setIndexActive(idx)}
                  />
                ))
              }
            </Tabs>
            {
              tabDataNewsHome.map((ele, idx) => (
                <Panel
                  key={`panel-${idx.toString()}`}
                  active={indexActive === idx}
                >
                  <div className="t-newshome_wrapper">
                    {
                      ele.dataNewsHome.length > 0
                      && (
                        <>
                          <div
                            className="t-newshome_right"
                          >
                            <NewsCard
                              imgSrc={ele.dataNewsHome[0].imgSrc}
                              ratio={ele.dataNewsHome[0].ratio}
                              title={ele.dataNewsHome[0].title}
                              desc={ele.dataNewsHome[0].desc}
                              updatedate={ele.dataNewsHome[0].updatedate}
                              href=""
                            />
                          </div>
                          <div className="t-newshome_left">
                            {
                              ele.dataNewsHome.map((item, stt) => (
                                stt > 0 && (
                                  <NewsCard
                                    direction="horizontal"
                                    imgSrc={item.imgSrc}
                                    ratio={item.ratio}
                                    title={item.title}
                                    href=""
                                  />
                                )
                              ))
                            }
                          </div>
                        </>
                      )
                    }
                  </div>
                </Panel>
              ))
            }
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewsHome;
