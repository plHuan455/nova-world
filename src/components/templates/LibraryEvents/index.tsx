import React from 'react';

import Button from 'components/atoms/Button';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Card, { CardProps } from 'components/molecules/Card';
import Animate from 'components/organisms/Animate';

interface LibraryEventProps {
  listEvent: CardProps[];
  fetching?: boolean;
  loadingBtn?: boolean;
  handleClick?: (idx: number) => void;
  handleShowMore?: () => void;
  totalPage?: number;
  page?: number;
}

const LibraryEvent: React.FC<LibraryEventProps> = ({
  listEvent,
  fetching,
  loadingBtn,
  totalPage = 1,
  page = 1,
  handleClick,
  handleShowMore,
}) => (
  <Animate type="scaleY" extendClassName="t-library-events">
    <div className="t-library-events_list">
      {fetching ? (
        <div className="t-library-events_loading">
          <Loading modifiers={['blue']} />
        </div>
      ) : (
        <div className="t-library-events_list_wrapper">
          {listEvent.length > 0 ? (
            listEvent.map((item, idx) => (
              <div
                className="t-library-events_list_item"
                key={idx.toString()}
                onClick={() => handleClick && handleClick(idx)}
              >
                <Card
                  imgSrc={item.imgSrc}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))
          ) : (
            <div className="t-library-events_list_empty">
              <Text>Không có sự kiện</Text>
            </div>
          )}
        </div>
      )}
      {totalPage > 1 && (
      <div className="t-library-events_button">
        <Button
          loading={loadingBtn}
          handleClick={handleShowMore}
          type="button"
        >
          {totalPage > page ? 'Xem thêm' : 'Rút gọn'}
        </Button>
      </div>
      )}
    </div>
  </Animate>
);

LibraryEvent.defaultProps = {};

export default LibraryEvent;
