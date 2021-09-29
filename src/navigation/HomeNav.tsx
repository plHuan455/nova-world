import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';
import { Redirect } from 'react-router-dom';

import useCallService from 'hooks/useCallService';
import i18n from 'i18n';
import { TemplateCode } from 'navigation';
import { getStaticHomeService } from 'services/navigation';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setPageTranslation } from 'store/locales';
import { getImageURL } from 'utils/functions';
import { getLangURL, getSlugByTemplateCode } from 'utils/language';

const NotFound = React.lazy(() => import('pages/NotFound'));
const Player = React.lazy(() => import('components/organisms/Player'));

const HomeNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const { staticSlug } = useAppSelector((state) => state.menu);
  const videoAnimation = useAppSelector((state) => state.systems.data?.videoAnimation);
  const [videoLoading, setVideoLoading] = useState('pending');
  const homeData = useCallService(() => getStaticHomeService(), []);

  useEffect(() => {
    if (homeData) {
      dispatch(setPageTranslation({
        translation: homeData.data?.pageData.translations,
        isDetail: false,
      }));
    }
  }, [dispatch, homeData]);

  const RenderVideos = useCallback(() => (
    <div className="p-home_loading">
      <Player
        ratio="652x367"
        isPlay
        isMuted
        videoSrc={getImageURL(videoAnimation)}
        onEnded={() => setVideoLoading('fullfilled')}
      />
    </div>
  ), [videoAnimation]);

  if (videoLoading === 'pending') return <RenderVideos />;

  switch (homeData.status) {
    case 'pending': {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      return <RenderVideos />;
    }
    case 'rejected': {
      const error = homeData.error && homeData.error.length > 0
        ? homeData.error[0]
        : undefined;
      if (error?.code.toString() === '404') {
        return (
          <Redirect to={`${getLangURL(i18n.language)}/${getSlugByTemplateCode('page404', staticSlug)}`} />
        );
      }
      return <div>Error</div>;
    }
    default: {
      document.body.style.overflow = '';
      document.body.style.height = '';
      const Component = TemplateCode.find(
        (template) => template.code === homeData.data?.pageData.templateCode,
      )?.component;

      if (Component) {
        return React.createElement<BasePageData<any>>(
          Component as FunctionComponent,
          homeData.data,
        );
      }
      return React.createElement(
        NotFound,
      );
    }
  }
};

export default HomeNav;
