import React from 'react';

import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import NewsCard, { NewsCardProps } from 'components/molecules/NewsCard';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import Tabs, { Panel, Tab } from 'components/organisms/Tabs';

export interface NewsHomeTabProps {
  titleTab: string;
  dataNewsHome: NewsCardProps[];
  slug:string;
}

interface NewsHomeProps {
  title?: string;
  tabDataNewsHome: NewsHomeTabProps[];
  indexActive?: number;
  handleClickTabs?: (index: number) => void;
  loading?: boolean;
}

const NewsHome: React.FC<NewsHomeProps> = ({
  title,
  tabDataNewsHome,
  indexActive,
  handleClickTabs,
  loading,
}) => (
  <div className="t-newshome">
    <div className="t-newshome_wrap">
      <Container>
        <Animate
          type="beatSmall"
          extendClassName="t-newshome_title"
        >
          <Text modifiers={['40x60', '500', 's005', 'white', 'center', 'uppercase']}>
            {title}
          </Text>
        </Animate>
        <Animate
          type="fadeInBlur"
          extendClassName="t-newshome_tabs"
        >
          <Tabs slidesToShow={tabDataNewsHome.length}>
            {
              tabDataNewsHome.map((ele, idx) => (
                <Tab
                  key={`tab-${idx.toString()}`}
                  active={idx === indexActive}
                  label={ele.titleTab}
                  handleClick={() => {
                    if (handleClickTabs) handleClickTabs(idx);
                  }}
                />
              ))
            }
          </Tabs>

          {loading && (
            <Loading modifiers={['blue']} />
          )}

          {
          !loading && tabDataNewsHome.map((ele, idx) => (
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
                            href={ele.dataNewsHome[0].href}
                          />
                        </div>
                        <div className="t-newshome_left">
                          {
                            ele.dataNewsHome.map((item, stt) => (
                              stt > 0 && (
                                <NewsCard
                                  key={`news-card-${stt.toString()}`}
                                  imgSrc={item.imgSrc}
                                  ratio={item.ratio}
                                  title={item.title}
                                  href={item.href}
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
        </Animate>
      </Container>
    </div>
  </div>
);

export default NewsHome;
