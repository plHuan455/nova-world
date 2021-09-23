import React from 'react';

import Button from 'components/atoms/Button';
import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Card, { CardProps } from 'components/molecules/Card';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import Tabs, { Panel, Tab } from 'components/organisms/Tabs';

export type NewsCategoryType = {
  id: number;
  label: string;
  slug: string;
};

export type ListPanelType = {
  id: number;
  listNews: CardProps[];
};

interface NewsListProps {
  title?: string;
  listLabel: NewsCategoryType[];
  listPanel: ListPanelType[];
  fetching?: boolean;
  loadingBtn?: boolean;
  handleClickTab?: (idx: number) => void;
  tabActive?: number;
  handleShowMore?: () => void;
  totalPage?: number;
  page?: number;
}

const NewsList: React.FC<NewsListProps> = ({
  title,
  listLabel,
  listPanel,
  fetching,
  loadingBtn,
  totalPage = 1,
  tabActive = 0,
  page = 1,
  handleClickTab,
  handleShowMore,
}) => (
  <div className="t-news">
    <Container>
      <Animate type="beatSmall" extendClassName="t-news_title">
        <Heading type="h2">
          {title}
          <Divider />
        </Heading>
      </Animate>
      <Tabs slidesToShow={listLabel.length}>
        {listLabel.map((ele, idx) => (
          <Tab
            key={idx.toString()}
            label={ele.label}
            active={idx === tabActive}
            labelColor="cyanCobaltBlue"
            handleClick={() => handleClickTab && handleClickTab(idx)}
          />
        ))}
      </Tabs>
      <div className="t-news_list">
        {fetching ? (
          <div className="t-news_loading">
            <Loading modifiers={['blue']} />
          </div>
        ) : (
          <>
            {listPanel?.length > 0 && (
            <>
              {listPanel?.map((panel, index) => (
                <Panel
                  key={`panel-${index.toString()}`}
                  active={tabActive === index}
                >
                  <div className="t-news_list_wrapper">
                    {panel.listNews.length > 0 ? (
                      panel.listNews.map((item, idx) => (
                        <div className="t-news_list_item" key={idx.toString()}>
                          <Card
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="t-news_list_empty">
                        <Text>Không có tin tức</Text>
                      </div>
                    )}
                  </div>
                </Panel>
              ))}
              {totalPage > 1 && (
              <div className="t-news_button">
                <Button loading={loadingBtn} handleClick={handleShowMore} type="button">
                  {totalPage > page ? 'Xem thêm' : 'Rút gọn'}
                </Button>
              </div>
              )}
            </>
            )}
          </>
        )}
      </div>
    </Container>
  </div>
);

export default NewsList;
