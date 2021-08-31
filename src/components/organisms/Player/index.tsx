import React, { forwardRef } from 'react';
import ReactPlayer from 'react-player';

import Image from 'components/atoms/Image';
import mapModifiers from 'utils/functions';

interface PlayerProps {
  ratio: Ratio;
  videoSrc?: string;
  videoThumbnail?: string;
  isPlay?: boolean;
  hasControls?: boolean;
  isMuted?: boolean;
  handleClickPlayBtn?: () => void;
  isHomePlayer?: boolean;
}

const Player: React.ForwardRefRenderFunction<ReactPlayer, PlayerProps> = (
  {
    ratio,
    videoSrc,
    videoThumbnail,
    isPlay,
    hasControls,
    isMuted,
    handleClickPlayBtn = () => {},
    isHomePlayer,
  },
  ref,
) => (
  <div className={mapModifiers('o-player', isHomePlayer && 'isHomePlayer')}>
    <div className="o-player_video">
      <ReactPlayer
        url={videoSrc}
        width="100%"
        height="100%"
        playsinline
        controls={hasControls}
        muted={isMuted}
        playing={isPlay}
        ref={ref}
      />
    </div>
    {!isPlay && (
      <>
        {videoThumbnail && (
          <div className="o-player_thumbnail">
            <Image
              imgSrc={videoThumbnail}
              alt="video thumbnail"
              ratio={ratio}
            />
          </div>
        )}
        <div className="o-player_button" onClick={handleClickPlayBtn} />
      </>
    )}
  </div>
);

export default forwardRef(Player);
