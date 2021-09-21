import React, { FunctionComponent, useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import Player from 'components/organisms/Player';
import useCallService from 'hooks/useCallService';
import { TemplateCode } from 'navigation';
import { getStaticHomeService } from 'services/navigation';
import { BasePageData } from 'services/navigation/types';
import { useAppSelector } from 'store/hooks';
import { getSlugByTemplateCode } from 'utils/language';

const HomeNav: React.FC = () => {
  const { staticSlug } = useAppSelector((state) => state.menu);
  const [videoLoading, setVideoLoading] = useState('pending');
  const homeData = useCallService(() => getStaticHomeService(), []);

  const RenderVideos = useCallback(() => (
    <div className="p-home_loading">
      <Player
        ratio="652x367"
        isPlay
        isMuted
        videoSrc="https://nova-world-cms.3forcom.net/storage/upload/media/video-loading17f9e3ab.mp4"
        onEnded={() => setVideoLoading('fullfilled')}
      />
    </div>
  ), []);

  if (videoLoading === 'pending') return <RenderVideos />;

  switch (homeData.status) {
    case 'pending': {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      return <Loading />;
    }
    case 'rejected': {
      const error = homeData.error && homeData.error.length > 0
        ? homeData.error[0]
        : undefined;
      if (error?.code.toString() === '404') {
        return (
          <Redirect to={`/${getSlugByTemplateCode('ERROR_404', staticSlug)}`} />
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

      return React.createElement<BasePageData<any>>(
        Component as FunctionComponent,
        homeData.data,
      );
    }
  }
};

export default HomeNav;
