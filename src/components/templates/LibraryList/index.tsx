import React, { useMemo, useRef, useState } from 'react';

import imageLibraryData from 'assets/dataDummy/imageLibrary';
import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Loading from 'components/atoms/Loading';
import { CardProps } from 'components/molecules/Card';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import LibraryImages, { LibraryItemTypes, LibraryTagType } from 'components/organisms/LibraryImage';
import Tabs, { Tab } from 'components/organisms/Tabs';
import LibraryEvents from 'components/templates/LibraryEvents';
import LibraryImageCarousel from 'components/templates/LibraryImageCarousel';
import LibraryProcess, { LibraryProcessListTypes } from 'components/templates/LibraryProcess';

export type LibraryCategoryType = {
  id: number;
  label: string;
  slug: string;
};

export type ListDataType = LibraryItemTypes[] | LibraryProcessListTypes[] | CardProps[]

interface LibraryListProps {
  title?: string;
  activeTab?: number;
  cateList: LibraryCategoryType[];
  tagList?: LibraryTagType[];
  fetching?: boolean;
  loadingBtn?: boolean;
  listData: ListDataType;
  handleClickTabPanel?: (idx: number) => void;
  handleShowMore?: () => void;
  // handleClickImage?: (idx: number) => void;
  handleClickEvent?: (idx: number) => void;
  page?: number;
  totalPage?: number;
}

const LibraryList: React.FC<LibraryListProps> = ({
  activeTab = 0,
  title = 'thư viện',
  cateList,
  tagList,
  listData,
  fetching,
  // handleClickImage,
  handleClickEvent,
  handleShowMore,
  handleClickTabPanel,
  page = 0,
  totalPage = 2,
}) => {
  const [tabIdx, setTabIdx] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const imageRef = useRef<number>(0);

  const handleClickImage = (idx: number) => {
    setShowImage(true);
    imageRef.current = idx;
  };

  const renderPanel = useMemo(() => {
    switch (activeTab) {
      case 1:
        return (
          <LibraryProcess
            processList={listData as LibraryProcessListTypes[]}
          />
        );

      case 2:
        return (
          <LibraryEvents
            listEvent={listData as CardProps[]}
            handleClick={handleClickEvent}
            handleShowMore={handleShowMore}
            page={page}
            totalPage={totalPage}
          />
        );

      default:
        return (
          <LibraryImages
            listImages={listData as LibraryItemTypes[]}
            tagsList={tagList}
            handleClickImage={handleClickImage}
            handleShowMore={handleShowMore}
            page={page}
            totalPage={totalPage}
          />
        );
    }
  }, [activeTab, listData, tagList]);

  return showImage ? (
    <LibraryImageCarousel
      imageList={imageLibraryData}
      idxActive={imageRef.current}
      handleBack={() => setShowImage(false)}
    />
  ) : (
    <div className="t-library">
      <Container>
        <Animate type="beatSmall" extendClassName="t-library_title">
          <Heading type="h2">
            {title}
            <Divider />
          </Heading>
        </Animate>
        <Animate type="scaleX">
          {cateList && cateList.length > 0 && (
          <div className="t-library_tabs">
            <Tabs>
              {cateList?.map((panel, i) => (
                <Tab
                  key={`panel-${i + 1}`}
                  active={tabIdx === i}
                  label={panel.label}
                  labelColor="cyanCobaltBlue"
                  handleClick={() => {
                    setTabIdx(i);
                    if (handleClickTabPanel) handleClickTabPanel(i);
                  }}
                />
              ))}
            </Tabs>
          </div>
          )}
        </Animate>
        <div className="t-library_wrapper">
          {fetching ? (
            <div className="t-library_loading">
              <Loading modifiers={['blue']} />
            </div>
          ) : (
            <div className="t-library_list">
              {renderPanel}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

LibraryList.defaultProps = {};

export default LibraryList;
