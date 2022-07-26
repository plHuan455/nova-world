import React, { useMemo, useRef, useState } from 'react';

import Events from './events';
import Images from './images';
import Process from './process';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import Tabs, { Tab } from 'components/organisms/Tabs';
import LibraryImageCarousel from 'components/templates/LibraryImageCarousel';
import { LibraryListItemData } from 'services/libraries/type';
import mapModifiers, { getImageURL } from 'utils/functions';

export interface ContentProps {
  title?: string;
  activeTab?: number;
  listLabel?: Array<{title?:string}>;
}

const Content: React.FC<ContentProps> = ({
  title,
  activeTab,
  listLabel,
}) => {
  const [idxTabActive, setIdxTabActive] = useState<number>(activeTab || 0);

  const [imagesList, setImagesList] = useState<LibraryListItemData[]>([]);
  const idxImagesRef = useRef<number>();

  const handleClickImages = (idx: number, data: LibraryListItemData[]) => {
    idxImagesRef.current = idx;
    setImagesList(data);
  };

  const handleBackImagesDetail = () => {
    idxImagesRef.current = undefined;
    setImagesList([]);
  };

  const convertImagesList = useMemo(() => {
    if (!imagesList.length) return [];
    return imagesList.map((e) => ({
      title: e.title,
      imgSrc: getImageURL(e?.translation?.media || e?.translation?.mediaThumb),
    }));
  }, [imagesList]);

  return (
    <div className={mapModifiers('p-library_container', !!imagesList.length && 'active')}>
      <div className="p-library_content">
        <Container>
          <Animate type="beatSmall" extendClassName="p-library_title">
            <Heading type="h2">
              {title}
              <Divider />
            </Heading>
          </Animate>
          <div className="p-library_tabs">
            <Tabs>
              {listLabel?.map((tab, i) => (
                <Tab
                  key={`_tab-${i + 1}`}
                  active={idxTabActive === i}
                  label={tab?.title}
                  labelColor="cyanCobaltBlue"
                  handleClick={() => {
                    setIdxTabActive(i);
                  }}
                />
              ))}
            </Tabs>
          </div>
          <div className="p-library_wrapper">
            {(() => {
              switch (idxTabActive) {
                case 1:
                  return (
                    <Process />
                  );
                case 2:
                  return (
                    <Events />
                  );

                default:
                  return (
                    <Images handleClick={handleClickImages} />
                  );
              }
            })()}
          </div>
        </Container>
      </div>
      <div className="p-library_imagesdetail">
        <LibraryImageCarousel
          imageList={convertImagesList}
          idxActive={idxImagesRef.current}
          handleBack={handleBackImagesDetail}
        />
      </div>
    </div>
  );
};

export default Content;
