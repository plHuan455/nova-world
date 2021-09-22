import React from 'react';

import Animate from '../Animate';

import Button from 'components/atoms/Button';
import Image from 'components/atoms/Image';
import Loading from 'components/atoms/Loading';
import Tag from 'components/atoms/Tag';
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
  tagsActive?: number[];
  tagsList?: LibraryTagType[];
  page?: number;
  totalPage?: number;
  fetching?: boolean;
  loading?: boolean;
  handleClickImage?: (index: number) => void;
  handleClickTag?: (id: number) => void;
  handleShowMore?: () => void;
}

const LibraryImages: React.FC<LibraryImagesProps> = ({
  listImages,
  tagsActive,
  tagsList,
  page = 0,
  totalPage = 0,
  fetching,
  loading,
  handleClickImage,
  handleClickTag,
  handleShowMore,
}) => (
  <div className="o-libraryimages">
    <>
      {!!tagsList?.length && (
      <Animate type="slideInLeft" extendClassName="o-libraryimages_tags">
        <div className="o-libraryimages_tags_wrap">
          {tagsList?.map((item, idx) => (
            <div key={idx.toString()} className="o-libraryimages_tags_item">
              <Tag
                isActive={tagsActive?.includes(item.id)}
                handleClick={() => handleClickTag && handleClickTag(item.id)}
              >
                {item.label}
              </Tag>
            </div>
          ))}
        </div>
      </Animate>
      )}
      {fetching ? (
        <div className="o-libraryimages_loading">
          <Loading modifiers={['blue']} />
        </div>
      ) : (
        <Animate type="fadeInBlur" extendClassName="o-libraryimages_container">
          {listImages?.map((val, idx) => (
            <div
              className="o-libraryimages_item"
              key={idx.toString()}
              onClick={() => handleClickImage && handleClickImage(idx)}
            >
              <div className={mapModifiers('o-libraryimages_item_wrapper')}>
                <Image
                  imgSrc={val.imgSrc}
                  // ratio={idx === 0 ? '547x365' : '274x175'}
                  ratio="16x9"
                  alt={`item${idx}`}
                />
              </div>
            </div>
          ))}
        </Animate>
      )}
      {totalPage > 1 && (
        <div className="o-libraryimages_button">
          <Button
            handleClick={handleShowMore}
            type="button"
            loading={loading}
          >
            {totalPage > page ? 'Xem thêm' : 'Rút gọn'}
          </Button>
        </div>
      )}
    </>
  </div>
);
export default LibraryImages;
