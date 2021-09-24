import React, { FunctionComponent, useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';

import useCallService from 'hooks/useCallService';
import { TemplateCode } from 'navigation';
import { getStaticHomeService } from 'services/navigation';
import { useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';
import { getSlugByTemplateCode } from 'utils/language';

const NotFound = React.lazy(() => import('pages/NotFound'));
const Player = React.lazy(() => import('components/organisms/Player'));

const HomeNav: React.FC = () => {
  const { staticSlug } = useAppSelector((state) => state.menu);
  const videoAnimation = useAppSelector((state) => state.systems.data?.videoAnimation);
  const [videoLoading, setVideoLoading] = useState('pending');
  const homeData = useCallService(() => getStaticHomeService(), []);

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
          <Redirect to={`/${getSlugByTemplateCode('page404', staticSlug)}`} />
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
