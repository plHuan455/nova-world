import React, { useMemo } from 'react';

import { ExperienceCardItem } from 'components/molecules/ExperienceCard';
import ExperienceJourney from 'components/templates/ExperienceJourney';
import useDidMount from 'hooks/useDidMount';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getJourneysAsync } from 'store/journeys';
import { getImageURL } from 'utils/functions';

type ExperienceJourneyHomeProps = {
  data?: HomeBlockSection5
}

const PAGE = {
  PAGE_INITIAL: 1,
  LIMIT: 4,
};

const ExperienceJourneyHome: React.FC<ExperienceJourneyHomeProps> = ({
  data,
}) => {
  const {
    journeys,
    menu: { prefix },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useDidMount(() => {
    if (journeys.data.length <= 0) {
      dispatch(getJourneysAsync({ page: PAGE.PAGE_INITIAL, limit: PAGE.LIMIT }));
    }
  });

  const dataJourneys = useMemo((): ExperienceCardItem[][] => {
    if (!journeys?.data.length) return [];

    return journeys.data.map((item) => {
      if (!item.images?.length) return [];

      return item.images.map((e) => ({
        href: (prefix?.journeysDetail && item.slug) ? prefix.journeysDetail + item.slug : '',
        title: e.title,
        subTitle: e.subTitle,
        imgSrc: getImageURL(e.image),
        alt: e.title,
      }));
    });
  }, [journeys, prefix]);

  return (
    <ExperienceJourney
      title={data?.title || ''}
      dataExperienceJourney={dataJourneys}
    />
  );
};

export default ExperienceJourneyHome;
