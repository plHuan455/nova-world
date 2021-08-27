import { Story, Meta } from '@storybook/react';
import React from 'react';

import Carousel, { NextArrow, PrevArrow } from '.';

export default {
  title: 'Components/organisms/Carousel',
  component: Carousel,
  argTypes: {
    variantArrow: {
      control: {
        type: 'select',
        options: ['green', 'light', 'normal', 'large'],
      },
      defaultValue: 'light',
    },
  },
} as Meta;

export const normal: Story = ({
  variantArrow,
}) => {
  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: variantArrow !== 'large' ? <PrevArrow variant={variantArrow} /> : undefined,
    nextArrow: <NextArrow variant={variantArrow} />,
  };
  return (
    <div style={{
      padding: '50px',
    }}
    >
      <Carousel settings={settings}>
        <div style={{
          height: '300px',
          backgroundColor: '#efc879',
        }}
        />
        <div style={{
          height: '300px',
          backgroundColor: '#52bad9',
        }}
        />
        <div style={{
          height: '300px',
          backgroundColor: '#aab0b8',
        }}
        />
      </Carousel>
    </div>
  );
};
