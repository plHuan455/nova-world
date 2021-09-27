import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Detail from './detail';
import Discover from './discover';

import Loading from 'components/atoms/Loading';
import Banner from 'components/organisms/Banner';
import useCallService from 'hooks/useCallService';
import useDidMount from 'hooks/useDidMount';
import useMainLayout from 'hooks/useMainLayout';
import { getJourneyDetailService, getJourneyDivergencesService, getJourneysService } from 'services/journeys';
import { DivergencesItem, JourneysItem } from 'services/journeys/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setPageTranslation } from 'store/locales';
import { getImageURL } from 'utils/functions';

const ExperienceJourneyDetail:React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    menu: { prefix },
  } = useAppSelector((state) => state);

  useMainLayout({ isHome: false });

  useDidMount(() => {
    dispatch(setPageTranslation({
      isDetail: true,
    }));
  });

  const { slug } = useParams<{slug?: string}>();

  const [detail, setDetail] = useState<JourneysItem>();
  const [divergences, setDivergences] = useState<DivergencesItem[]>();
  const [loading, setLoading] = useState(false);

  const discover = useCallService(() => getJourneysService({ page: 1, limit: 3 }));

  useEffect(() => {
    const fetchInit = async () => {
      try {
        setLoading(true);
        const resDetail = await getJourneyDetailService(slug);
        setDetail(resDetail);
        const resDivergences = await getJourneyDivergencesService(resDetail.id);
        setDivergences(resDivergences);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchInit();
  }, [slug]);

  const dataLabels = divergences?.map((item) => (item.name));

  const dataPanel = divergences?.map((item) => ({
    title: item.title,
    content: item.content,
    publishedAt: item?.publishedAt || '',
    subTitle: detail?.title || '',
  }));

  const listCard = discover.data?.data.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.title,
    description: item.description,
    href: (prefix?.journeysDetail && item.slug) ? prefix?.journeysDetail + item.slug : '',
  }));

  if (loading) {
    return <Loading modifiers={['blue']} />;
  }

  return (
    <>
      <section className="s-banner">
        <Banner thumbnail="https://source.unsplash.com/random" layerDew={false} />
      </section>
      <section className="s-wrap s-donut">
        <Detail panel={dataPanel || []} labels={dataLabels || []} />
        <Discover title="KHÁM PHÁ THÊM" listCard={listCard || []} />
      </section>
    </>
  );
};

export default ExperienceJourneyDetail;
