import React, { useMemo } from 'react';

import ExperienceJourney from 'components/templates/ExperienceJourney';
import useDidMount from 'hooks/useDidMount';
import { HomeBlock } from 'services/home/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getJourneysAsync } from 'store/journeys';
import { getImageURL } from 'utils/functions';

type ExperienceJourneyHomeProps = {
  data?: HomeBlock
}

const PAGE = {
  PAGE_INITIAL: 1,
  LIMIT: 4,
};

const ExperienceJourneyHome: React.FC<ExperienceJourneyHomeProps> = ({
  data,
}) => {
  const { journeys } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useDidMount(() => {
    if (journeys.data.length <= 0) {
      dispatch(getJourneysAsync({ page: PAGE.PAGE_INITIAL, limit: PAGE.LIMIT }));
    }
  });

  const dataJourneys = useMemo(() => journeys.data.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.title,
    location: 'NovaWorld Ho Tram',
    href: '/',
  })), [journeys.data]);

  return (
    <ExperienceJourney
      title={data?.title}
      dataExperienceJourney={dataJourneys}
    />
  );
};

export default ExperienceJourneyHome;
