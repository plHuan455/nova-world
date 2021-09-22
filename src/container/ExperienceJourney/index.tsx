import React, { useCallback, useMemo } from 'react';

import Experience from './experience';

import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useDidMount from 'hooks/useDidMount';
import useMainLayout from 'hooks/useMainLayout';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getJourneysAsync } from 'store/journeys';
import { getBlockData, getImageURL } from 'utils/functions';

const PAGE = {
  PAGE_INITIAL: 1,
  LIMIT: 4,
};

const ExperienceJourney: React.FC<BasePageData<JourneysPage>> = ({
  banners,
  blocks,
  seoData,
}) => {
  const { banner } = useMainLayout({ type: 'another', banners });
  const dispatch = useAppDispatch();
  const { data, meta, loading } = useAppSelector((state) => state.journeys);

  const { title, description } = useMemo(() => getBlockData('section1', blocks), [blocks]) as JourneysBlock;

  const dataJourneys = useMemo(() => data.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.title,
    content: item.description,
    // TODO : Update btn label and link
    btnLabel: 'Khám phá ngay',
    btnLink: 'hanh-trinh-trai-nghiem/chi-tiet',
  })), [data]);

  useDidMount(() => {
    if (data.length <= 0) {
      dispatch(getJourneysAsync({ page: PAGE.PAGE_INITIAL, limit: PAGE.LIMIT }));
    }
  });

  const handleLoadMore = useCallback(
    () => {
      if (meta && meta.page < meta.totalPages) {
        dispatch(getJourneysAsync({ limit: PAGE.LIMIT, page: meta.page + 1 }));
      }
    },
    [dispatch, meta],
  );

  return (
    <>
      <HelmetComponent seoData={seoData} />
      <section>
        <Banner thumbnail={banner} />
      </section>
      <section className="s-wrap">
        <Experience
          title={title}
          description={description}
          data={dataJourneys}
          loading={loading}
          handleLoadMore={handleLoadMore}
        />
      </section>
    </>
  );
};

export default ExperienceJourney;
