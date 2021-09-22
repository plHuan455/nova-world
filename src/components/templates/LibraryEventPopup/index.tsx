import React from 'react';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Modal from 'components/organisms/Modal';

export interface EventCardProps {
  imgSrc: string[];
  alt?: string;
  title: string;
  description?: string;
}

interface EventPopupProps {
  isOpen: boolean;
  btnText?: string;
  handleClose: () => void;
  eventData: EventCardProps | null;
}

const EventPopup: React.FC<EventPopupProps> = ({
  isOpen,
  eventData,
  handleClose,

}) => {
  if (!eventData) return null;

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="t-eventpopup">
      <Modal
        handleClose={handleClose}
        isOpen={isOpen}
        classnames="t-eventpopup_modal"
      >
        <div className="t-eventpopup_wrapper">
          <div className="t-eventpopup_left">
            <Carousel settings={settings}>
              {eventData.imgSrc.map((e, idx) => (
                <div className="t-eventpopup_left_main" key={`_eventsPopupImage${String(idx)}`}>
                  <Image imgSrc={e} size="cover" ratio="668x445" />
                </div>
              ))}
            </Carousel>
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
};

export default EventPopup;
