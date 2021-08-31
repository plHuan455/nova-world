import React, { useState } from 'react';

import Image from 'components/atoms/Image';
import Player from 'components/organisms/Player';
/* eslint-disable */
interface BannerProps {
  isHomePage?: boolean;
  videoSrc?: string;
  isHomePlayer?: boolean;
  thumbnail: string;
  alt?: string;
}

const Banner: React.FC<BannerProps> = ({ isHomePage, thumbnail, alt, videoSrc }) => {
  const [playerPlay, setPlayerPlay] = useState(false);
  return (
    <div className="o-banner">
      {isHomePage ? (
        <div className="o-banner_home">
          <Player
            ratio="1366x768"
            isPlay={playerPlay}
            videoThumbnail={thumbnail}
            videoSrc={videoSrc}
            hasControls
            handleClickPlayBtn={() => setPlayerPlay(true)}
            isHomePlayer
          />
        </div>
      ) : (
        <div className="o-banner-wrap">
          <Image imgSrc={thumbnail} ratio="1366x768" alt={alt || "thumbnailBanner"} />
        </div>
      )}
    </div>
  );
}

export default Banner;
