import React, { useRef, useState } from 'react';

import Animate from '../Animate';

import Image from 'components/atoms/Image';
import Player from 'components/organisms/Player';
import useWindowScroll from 'hooks/useWindowScroll';
import mapModifiers from 'utils/functions';

interface BannerProps {
  isHomePage?: boolean;
  videoSrc?: string;
  isHomePlayer?: boolean;
  thumbnail: string;
  alt?: string;
  layerDew?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  isHomePage,
  thumbnail,
  alt,
  videoSrc,
  layerDew,
}) => {
  const [playerPlay, setPlayerPlay] = useState(false);
  const refBannerHome = useRef<HTMLDivElement | null>(null);

  useWindowScroll(() => {
    if (isHomePage
      && refBannerHome.current
      && window.scrollY > (refBannerHome.current.clientHeight / 2)
    ) {
      setPlayerPlay(false);
    }
  });

  return (
    <div
      ref={refBannerHome}
      className={mapModifiers(
        'o-banner',
        (layerDew && !playerPlay) && 'dew',
      )}
    >
      {isHomePage ? (
        <Animate type="fadeInBlur" extendClassName="o-banner_home">
          <Player
            loop
            ratio="1366x768"
            isPlay={playerPlay}
            videoThumbnail={thumbnail}
            videoSrc={videoSrc}
            handleClickPlayBtn={() => setPlayerPlay(!playerPlay)}
            isHomePlayer
            hasControls
          />
        </Animate>
      ) : (
        <Animate type="fadeInBlur" extendClassName="o-banner-wrap">
          <Image imgSrc={thumbnail} ratio="1366x450" alt={alt || 'image-banner'} />
        </Animate>
      )}
    </div>
  );
};

Banner.defaultProps = {
  layerDew: true,
};

export default Banner;
