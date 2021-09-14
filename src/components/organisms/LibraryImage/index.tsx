// import LibraryPopup from 'components/templates/LibraryPopup';
import React from 'react';

import Button from 'components/atoms/Button';
import Image from 'components/atoms/Image';
import mapModifiers from 'utils/functions';

export type LibraryItemTypes = {
  media: string;
  mediaThumb: string;
  type?: string;
  isPlay?: boolean;
}

export interface LibraryImagesProps {
  listImages: LibraryItemTypes[];
  handleClickImage?: (index: number) => void;
  handleShowMore?: () => void;
  limitVisible?: number;
  page?: number;
  totalPage?: number;
}

const LibraryImages: React.FC<LibraryImagesProps> = ({
  listImages,
  handleClickImage,
  handleShowMore,
  page = 0,
  totalPage = 0,
}) => {
  // const [activeSlider, setActiveSlider] = useState<{
  //   index: number;
  //   data: LibraryItemTypes[];
  // }>({
  //   index: 0,
  //   data: [],
  // });
  // const [isOpenPopup, setIsOpenPopup] = useState(false);

  // const handleImagePopup = (data: LibraryItemTypes[], index: number) => {
  //   setIsOpenPopup(true);
  //   setActiveSlider({ index, data });
  // };

  const handleClick = (idx: number) => {
    if (handleClickImage) {
      handleClickImage(idx);
    }
    // handleImagePopup(listImages, idx);
  };

  return (
    <div className="o-libraryimages">
      {listImages?.length > 0 ? (
        <>
          <div className="o-libraryimages_container">
            {listImages?.map((val, idx) => (
              <div
                className="o-libraryimages_item"
                key={idx.toString()}
                onClick={() => handleClick(idx)}
              >
                <div className={mapModifiers('o-libraryimages_item_wrapper')}>
                  <Image
                    imgSrc={val.mediaThumb}
                    ratio={idx === 0 ? '547x365' : '274x175'}
                    alt={`item${idx}`}
                  />
                </div>
              </div>
            ))}
          </div>
          {totalPage > 1 && (
            <div className="o-libraryimages_button">
              <Button
                handleClick={handleShowMore}
                type="button"
              >
                {totalPage > page ? 'Xem thêm' : 'Rút gọn'}
              </Button>
            </div>
          )}
        </>
      ) : <></>}
      {/* <div className="t-libraryimages_modal">
        <LibraryPopup
          isOpen={isOpenPopup}
          activeIndex={activeSlider.index}
          dataLibrary={activeSlider.data as LibraryItemTypes[]}
          handleClose={() => setIsOpenPopup(false)}
          type={listImages[0]?.type}
        />
      </div> */}
    </div>
  );
};
export default LibraryImages;
