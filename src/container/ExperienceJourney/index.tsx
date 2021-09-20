import React, { useCallback, useMemo } from 'react';

import Experience from './experience';

import Banner from 'components/organisms/Banner';
import useDidMount from 'hooks/useDidMount';
import useMainLayout from 'hooks/useMainLayout';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getJourneysAsync } from 'store/journeys';
import { getImageURL } from 'utils/functions';

const PAGE = {
  PAGE_INITIAL: 1,
  LIMIT: 4,
};

const ExperienceJourney:React.FC = () => {
  useMainLayout('another');
  const dispatch = useAppDispatch();
  const { journeys } = useAppSelector((state) => state);

  const dataJourneys = useMemo(() => journeys.data.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.title,
    content: item.description,
    // TODO : Update btn label and link
    btnLabel: 'Khám phá ngay',
    btnLink: 'hanh-trinh-trai-nghiem/chi-tiet',
  })), [journeys.data]);

  useDidMount(() => {
    if (journeys.data.length <= 0) {
      dispatch(getJourneysAsync({ page: PAGE.PAGE_INITIAL, limit: PAGE.LIMIT }));
    }
  });

  const handleLoadMore = useCallback(
    () => {
      if (journeys.meta && journeys.meta.page < journeys.meta.totalPages) {
        dispatch(getJourneysAsync({ limit: PAGE.LIMIT, page: journeys.meta.page + 1 }));
      }
    },
    [dispatch, journeys.meta],
  );

  return (
    <>
      <section>
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="s-wrap">
        <Experience
          data={dataJourneys}
          handleLoadMore={handleLoadMore}
          loading={journeys.loading}
        />
      </section>
    </>
  );
};

export default ExperienceJourney;
