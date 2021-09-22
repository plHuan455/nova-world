import React, { useMemo, useRef, useState } from 'react';

import LibraryEventPopup, { EventCardProps } from 'components/templates/LibraryEventPopup';
import LibraryEvent from 'components/templates/LibraryEvents';
import useDebounce from 'hooks/useDebounce';
import useDidMount from 'hooks/useDidMount';
import useIsMounted from 'hooks/useIsMounted';
import { getEventsService } from 'services/events';
import { EventsItem } from 'services/events/types';
import { getImageURL } from 'utils/functions';

const INIT = 1;
const LIMIT = 9;

const Events: React.FC = () => {
  const isMounted = useIsMounted();

  const [data, setData] = useState<EventsItem[]>([]);
  const [meta, setMeta] = useState<MetaData>();
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const cardRef = useRef<EventCardProps>();

  const listEvent = useMemo(() => {
    if (!data.length) return [];

    return data.map((e) => ({
      imgSrc: getImageURL(e.thumbnail),
      title: e.name,
      description: e.description,
    }));
  }, [data]);

  const handleClick = (idx: number) => {
    const item = data[idx];
    if (item) {
      cardRef.current = {
        alt: item.name,
        title: item.name,
        description: item.description,
        imgSrc: item.popup.map((e) => getImageURL(e.image)),
      };
      setShow(true);
    }
  };

  const handleClose = () => {
    setShow(false);
    cardRef.current = undefined;
  };

  const handleShowMore = useDebounce(async () => {
    try {
      if (meta && meta.page < meta.totalPages) {
        setLoading(true);
        const res = await getEventsService({
          page: meta.page + 1,
          limit: LIMIT,
        });
        setData([...data, ...res.data]);
        setMeta(res.meta);
      } else {
        setMeta(meta ? { ...meta, page: 1 } : undefined);
        setData(data.slice(0, LIMIT));
      }
    } catch {
      // empty
    } finally {
      setLoading(false);
    }
  }, 500);

  useDidMount(() => {
    (async (): Promise<void> => {
      try {
        if (isMounted()) setFetching(true);
        const res = await getEventsService({
          page: INIT,
          limit: LIMIT,
        });
        if (isMounted()) setMeta(res.meta);
        if (isMounted()) setData(res.data);
      } catch {
        // empty
      } finally {
        if (isMounted()) setFetching(false);
      }
    })();
  });

  return (
    <>
      <LibraryEvent
        listEvent={listEvent}
        page={meta?.page}
        totalPage={meta?.totalPages}
        fetching={fetching}
        loading={loading}
        handleClick={handleClick}
        handleShowMore={handleShowMore}
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
