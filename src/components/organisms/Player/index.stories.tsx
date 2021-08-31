import { Story, Meta } from '@storybook/react';
import React from 'react';

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

export const normal: Story = ({ videoSrc, videoThumbnail, isHomePlayer }) => (
  <div style={{ maxWidth: '646px' }}>
    <Player videoSrc={videoSrc} videoThumbnail={videoThumbnail} ratio="1366x768" isHomePlayer={isHomePlayer} />
  </div>
);
