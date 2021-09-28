import React, { useMemo } from 'react';

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

  const dataJourneys = useMemo(() => journeys.data.map((item) => {
    const groupImg = item?.thumnailHome
      ? [item.thumnailHome, ...(item?.images || [])]
      : (item?.images || []);
    return ({
      listImg: groupImg.map((img) => getImageURL(img)),
      title: item?.title || '',
      location: item?.subtitle || '',
      href: (prefix?.journeysDetail && item.slug) ? prefix.journeysDetail + item.slug : '',
    });
  }), [journeys.data, prefix]);

  return (
    <ExperienceJourney
      title={data?.title || ''}
      dataExperienceJourney={dataJourneys}
    />
  );
};

export default ExperienceJourneyHome;
