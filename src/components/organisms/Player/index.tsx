/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import ReactPlayer from 'react-player/lazy';

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
  loop?: boolean;
  onEnded?: () => void;
}

const Player: React.ForwardRefRenderFunction<ReactPlayer, PlayerProps> = (
  {
    ratio,
    videoSrc,
    videoThumbnail,
    isPlay,
    hasControls,
    isMuted,
    handleClickPlayBtn,
    isHomePlayer,
    loop,
    onEnded,
  },
  ref,
) => (
  <div className={mapModifiers('o-player', isHomePlayer && 'isHomePlayer', ratio)}>
    <div className="o-player_video">
      {videoSrc && (
        <ReactPlayer
          loop={loop}
          url={videoSrc}
          width="100%"
          height="100%"
          playsinline
          controls={hasControls}
          muted={isMuted}
          playing={isPlay}
          ref={ref}
          onEnded={onEnded}
          fallback={<></>}
        />
      )}
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
        {!isHomePlayer && <div className="o-player_button" onClick={handleClickPlayBtn} />}
      </>
    )}
    {isHomePlayer && <div className={`o-player_button ${isPlay ? 'pause' : ''}`} onClick={handleClickPlayBtn} />}
  </div>
);

export default forwardRef(Player);
