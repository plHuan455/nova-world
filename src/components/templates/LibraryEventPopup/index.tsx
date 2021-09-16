import React from 'react';
// import Slider from 'react-slick';
// import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Modal from 'components/organisms/Modal';

export interface EventCardProps {
  imgSrc: string;
  alt?: string;
  title: string;
  description?: string;
}

interface EventPopupProps {
  isOpen: boolean;
  btnText?: string;
  handleClose: () => void;
  eventData: EventCardProps;
}

const EventPopup: React.FC<EventPopupProps> = ({
  isOpen,
  eventData,
  handleClose,

}) => (
  <div className="t-eventpopup">
    <Modal
      handleClose={handleClose}
      isOpen={isOpen}
      classnames="t-eventpopup_modal"
    >
      <div className="t-eventpopup_wrapper">
        <div className="t-eventpopup_left">
          <div className="t-eventpopup_left_main">
            <Image imgSrc={eventData.imgSrc} size="cover" ratio="668x445" />
          </div>
        </div>
        <div className="t-eventpopup_right">
          <div className="t-eventpopup_content">
            <Text modifiers={['20x32', 'cyanCobaltBlue', 's00015', '600']}>
              {eventData?.title}
            </Text>
            <div className="t-eventpopup_content_title">
              <Text
                modifiers={['dimGray']}
                innerHTML={eventData?.description}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
);

export default EventPopup;
