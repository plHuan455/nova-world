import { Story, Meta } from '@storybook/react';
import React from 'react';

import IntroductionHome from '.';

import Habana from 'assets/images/habana.jpeg';
import Morito from 'assets/images/morito.jpeg';
import TheTropicana from 'assets/images/the-tropicana.jpg';
import Wonderland from 'assets/images/wonderland.jpeg';

export default {
  title: 'Components/templates/IntroductionHome',
  component: IntroductionHome,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div
    style={{
      paddingBottom: '300px',
    }}
  >
    <IntroductionHome
      title="NOVAWORLD HO TRAM"
      description="Tổ hợp du lịch nghỉ dưỡng giải trí NovaWorld Ho Tram có quy mô 1.000ha, trải dọc 30km cung đường biển từ Lộc An đến Bình Châu. Cách thành phố Hồ Chí Minh 90 phút di chuyển, dự án NovaWorld Ho Tram bao gồm 10 phân kỳ, khai thác nét đẹp thiên nhiên nguyên sơ cùng địa thế rừng biển liền kề, phát triển sản phẩm second home giá trị và chuỗi tiện ích đẳng cấp, mang trải nghiệm quốc tế đa dạng về miền nhiệt đới Hồ Tràm."
      image={[
        {
          image: Habana,
        },
        {
          image: Morito,
        },
        {
          image: TheTropicana,
        },
        {
          image: Wonderland,
        },
      ]}
    />
  </div>
);
