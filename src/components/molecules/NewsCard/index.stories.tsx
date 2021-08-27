import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NewsCard from '.';

import imgNewsCard from 'assets/images/img_newscard.png';

export default {
  title: 'Components/molecules/NewsCard',
  component: NewsCard,
  argTypes: {},
} as Meta;

export const vertical: Story = () => (
  <Router>
    <div style={{
      background: '#000',
    }}
    >
      <div style={{
        maxWidth: '644px',
      }}
      >
        <NewsCard
          imgSrc={imgNewsCard}
          ratio="644x323"
          title="Habana Island Resort - Nơi trải nghiệm cuộc sống thượng lưu"
          desc="Lấy cảm hứng từ vùng Caribbean xinh đẹp, nơi pha trộn nhiều sắc màu văn hóa cùng trải nghiệm thượng lưu, những gam màu căng tràn nhựa sống hòa vào từng kiến trúc độc đáo..."
          updatedate="Cập nhật lúc 10:00 - 03/08/2021"
          href=""
        />
      </div>
    </div>
  </Router>
);

export const horizontal: Story = () => (
  <Router>
    <div style={{
      maxWidth: '450px',
    }}
    >
      <NewsCard
        direction="horizontal"
        imgSrc={imgNewsCard}
        ratio="450x248"
        title="Trải nghiệm nét đẹp văn hóa địa phương trong không gian..."
        href=""
      />
    </div>
  </Router>
);
