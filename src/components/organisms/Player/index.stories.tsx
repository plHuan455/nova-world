import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import Player from '.';

import videoThumbnailImg from 'assets/images/home-banner.jpg';

export default {
  title: 'Components/organisms/Player',
  component: Player,
  argTypes: {
    videoSrc: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://youtu.be/E2Tj_CQDrk4',
    },
    videoThumbnail: {
      control: {
        type: 'text',
      },
      defaultValue: videoThumbnailImg,
    },
    isHomePlayer: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const normal: Story = ({ videoSrc, videoThumbnail, isHomePlayer }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div style={{ maxWidth: '646px' }}>
      <Player
        videoSrc={videoSrc}
        videoThumbnail={videoThumbnail}
        ratio="1366x768"
        isHomePlayer={isHomePlayer}
        isPlay={isPlay}
        handleClickPlayBtn={() => setIsPlay(!isPlay)}
      />
    </div>
  );
};
