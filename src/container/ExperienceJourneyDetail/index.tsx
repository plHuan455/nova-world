import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect, useParams } from 'react-router-dom';

import Detail from './detail';
import Discover from './discover';

import Loading from 'components/atoms/Loading';
import Banner from 'components/organisms/Banner';
import HelmetComponent from 'container/MainLayout/helmet';
import useCallService from 'hooks/useCallService';
import useDidMount from 'hooks/useDidMount';
import useMainLayout from 'hooks/useMainLayout';
import i18n from 'i18n';
import { getJourneyDetailService, getJourneyDivergencesService, getJourneysService } from 'services/journeys';
import { DivergencesItem, JourneysItem } from 'services/journeys/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setPageTranslation } from 'store/locales';
import { getImageURL } from 'utils/functions';
import { fnCustomUrlDetail, getLangURL, getSlugByTemplateCode } from 'utils/language';

const ExperienceJourneyDetail:React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('translation');

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
  const [errorAxs, setErrorAxs] = useState<AxiosError[]>([]);

  const discover = useCallService(() => getJourneysService());
  const baseSystem = useAppSelector((state) => state.systems.baseSystem?.staticPages.novaworld);

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
        setErrorAxs(error);
      }
    };
    fetchInit();
  }, [slug]);

  const dataLabels = divergences?.map((item) => (item?.name || ''));

  const dataPanel = divergences?.map((item) => ({
    title: item?.title || '',
    content: item?.content || '',
    publishedAt: item?.publishedAt || '',
    subTitle: detail?.title || '',
  }));

  const listCard = discover.data?.data
    .filter((item) => item.id !== detail?.id)
    .map((item) => ({
      imgSrc: getImageURL(item?.thumbnail),
      title: item?.title,
      description: item?.description,
      href: fnCustomUrlDetail(prefix?.journeysDetail, item?.slug),
    }));

  if (loading) {
    return <Loading modifiers={['blue', 'page']} />;
  }

  if (errorAxs?.length && !!errorAxs.find((e) => e.code?.toString() === '404')) {
    return (
      <Redirect to={`${getLangURL(i18n.language)}/${getSlugByTemplateCode('page404', baseSystem)}`} />
    );
  }

  return (
    <>
      <HelmetComponent
        seoData={{
          imgSrc: detail?.thumbnail,
          title: detail?.title,
          description: detail?.description,
        }}
      />
      <section className="s-banner">
        <Banner thumbnail={getImageURL(detail?.banner)} layerDew={false} />
      </section>
      <section className="s-wrap s-donut">
        <Detail title={t('experience_journey.title_detail')} panel={dataPanel || []} labels={dataLabels || []} />
        <Discover title={t('experience_journey.title_discover_more')} listCard={listCard || []} />
      </section>
    </>
  );
};

export default ExperienceJourneyDetail;
