// import LibraryPopup from 'components/templates/LibraryPopup';
import React from 'react';

import Animate from '../Animate';

import Button from 'components/atoms/Button';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export type LibraryItemTypes = {
  imgSrc: string;
  title?: string;
}

export type LibraryTagType = {
  id: number;
  label: string;
};

export interface LibraryImagesProps {
  listImages: LibraryItemTypes[];
  tagsList?: LibraryTagType[];
  handleClickImage?: (index: number) => void;
  handleShowMore?: () => void;
  limitVisible?: number;
  page?: number;
  totalPage?: number;
}

const LibraryImages: React.FC<LibraryImagesProps> = ({
  listImages,
  tagsList,
  handleClickImage,
  handleShowMore,
  page = 0,
  totalPage = 0,
}) => (
  <Animate type="scaleY" extendClassName="o-libraryimages">
    {listImages?.length > 0 ? (
      <>
        {
            tagsList && (
              <div className="o-libraryimages_tags">
                {
                  tagsList.length > 0 && tagsList?.map((item, idx) => (
                    <div key={idx.toString()} className="o-libraryimages_tags_item">
                      <Text modifiers={['dimGray', '400']}>{item.label}</Text>
                    </div>
                  ))
                }
              </div>
            )
          }
        <div className="o-libraryimages_container">
          {listImages?.map((val, idx) => (
            <div
              className="o-libraryimages_item"
              key={idx.toString()}
              onClick={() => handleClickImage && handleClickImage(idx)}
            >
              <div className={mapModifiers('o-libraryimages_item_wrapper')}>
                <Image
                  imgSrc={val.imgSrc}
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
    ) : null}
  </Animate>
);
export default LibraryImages;
