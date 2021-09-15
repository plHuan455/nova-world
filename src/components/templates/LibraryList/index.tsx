import React, { useState } from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import LibraryImages, {
  LibraryImagesProps,
} from 'components/organisms/LibraryImage';
import Tabs, { Tab } from 'components/organisms/Tabs';

export type LibraryCategoryType = {
  id: number;
  label: string;
  slug: string;
};

export type LibraryTagType = {
  id: number;
  label: string;
};

interface LibraryListProps extends LibraryImagesProps {
  title?: string;
  activeTab?: number;
  cardIndex?: number;
  cateList: LibraryCategoryType[];
  tagsList?: LibraryTagType[];
  fetching?: boolean;
  handleClickTabPanel?: (idx: number) => void;
  page?: number;
  totalPage?: number;
}

const LibraryList: React.FC<LibraryListProps> = ({
  // activeTab,
  // cardIndex,
  title = 'thư viện',
  cateList,
  tagsList,
  listImages,
  fetching,
  handleClickImage,
  handleShowMore,
  handleClickTabPanel,
  page = 0,
  totalPage = 2,
}) => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div className="t-library">
      <Container>
        <div className="t-library_title">
          <Heading type="h2">
            {title}
            <Divider />
          </Heading>
        </div>
        {cateList && cateList.length > 0 && (
          <div className="t-library_tabs">
            <Tabs>
              {cateList?.map((panel, i) => (
                <Tab
                  key={`panel-${i + 1}`}
                  active={indexActive === i}
                  label={panel.label}
                  labelColor="cyanCobaltBlue"
                  handleClick={() => {
                    setIndexActive(i);
                    if (handleClickTabPanel) handleClickTabPanel(i);
                  }}
                />
              ))}
            </Tabs>
          </div>
        )}
        <div className="t-library_wrapper">
          {
            tagsList && (
              <div className="t-library_tags">
                {
                  tagsList.length > 0 && tagsList?.map((item, idx) => (
                    <div key={idx.toString()} className="t-library_tags_item">
                      <Text modifiers={['dimGray', '400']}>{item.label}</Text>
                    </div>
                  ))
                }
              </div>
            )
          }
          {fetching ? (
            <div className="t-library_loading">
              <Loading modifiers={['blue']} />
            </div>
          ) : (
            <div className="t-library_list">
              <LibraryImages
                listImages={listImages}
                handleClickImage={handleClickImage}
                handleShowMore={handleShowMore}
                page={page}
                totalPage={totalPage}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

LibraryList.defaultProps = {};

export default LibraryList;
