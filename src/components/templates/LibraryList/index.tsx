import React, { useState } from 'react';

import Loading from 'components/atoms/Loading';
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

interface LibraryListProps extends LibraryImagesProps {
  activeTab?: number;
  cardIndex?: number;
  cateList: LibraryCategoryType[];
  fetching?: boolean;
  handleClickTabPanel?: (idx: number) => void;
  page?: number;
  totalPage?: number;
}

const LibraryList: React.FC<LibraryListProps> = ({
  // activeTab,
  // cardIndex,
  cateList,
  listImages,
  fetching,
  handleClickImage,
  handleShowMore,
  // handleClickTabPanel,
  page = 0,
  totalPage = 0,
}) => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div className="t-library">
      <Container>
        {cateList && cateList.length > 0 && (
        <div className="t-library_tabs">
          <Tabs>
            {cateList?.map((panel, i) => (
              <Tab
                key={`panel-${i + 1}`}
                active={indexActive === i}
                label={panel.label}
                labelColor="cyanCobaltBlue"
                handleClick={() => setIndexActive(i)}
              />
            ))}
          </Tabs>
        </div>
        )}
        <div className="t-library_wrapper">
          {fetching ? (
            <div className="t-library_loading">
              <Loading modifiers={['green']} />
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
