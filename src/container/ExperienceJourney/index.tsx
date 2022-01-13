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
  pageData,
}) => {
  const { banner } = useMainLayout({ isHome: false, banners });
  const dispatch = useAppDispatch();
  const {
    journeys: { data, meta, loading },
    menu: { prefix },
  } = useAppSelector((state) => state);

  const { title, description } = useMemo(() => getBlockData('section1', blocks), [blocks]) as JourneysBlock;

  const dataJourneys = useMemo(() => data.map((item) => ({
    imgSrc: getImageURL(item?.thumbnail),
    title: item?.title || '',
    content: item?.description || '',
    btnLabel: item?.buttonLable || '',
    btnLink: (prefix?.journeysDetail && item?.slug) ? prefix.journeysDetail + item.slug : '',
    target: '_self',
  })), [data, prefix]);

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
      <HelmetComponent seoData={{ ...seoData, imgSrc: pageData?.image }} />
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
