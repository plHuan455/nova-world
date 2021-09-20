import React, { useRef, useState } from 'react';

import eventList from 'assets/dataDummy/eventLibrary';
import Loading from 'components/atoms/Loading';
import LibraryEventPopup, { EventCardProps } from 'components/templates/LibraryEventPopup';
import LibraryEvent from 'components/templates/LibraryEvents';
import useCallService from 'hooks/useCallService';
import getProcessesService from 'services/processes';

const Events: React.FC = () => {
  // TODO: Change service later
  const { status } = useCallService(() => getProcessesService(), []);

  const [show, setShow] = useState(false);
  const cardRef = useRef<EventCardProps>();

  const dummy = eventList.map((e, i) => ({ ...e, title: `${e.title} ${i}` }));

  const handleClick = (idx: number) => {
    cardRef.current = dummy[idx];
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    cardRef.current = undefined;
  };

  if (status === 'pending') {
    return (
      <div className="p-library_loading">
        <Loading modifiers={['blue']} />
      </div>
    );
  }

  return (
    <>
      <LibraryEvent
        listEvent={dummy}
        handleClick={handleClick}
        handleShowMore={() => {}} // TODO: Update later
        page={0} // TODO: Update later
        totalPage={0} // TODO: Update later
      />
      {cardRef.current && (
        <LibraryEventPopup
          isOpen={show}
          handleClose={handleClose}
          eventData={cardRef.current}
        />
      )}
    </>
  );
};

export default Events;
