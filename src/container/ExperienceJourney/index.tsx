/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Experience from './experience';

import Banner from 'components/organisms/Banner';
import useMainLayout from 'hooks/useMainLayout';

const dummyData = [
  {
    imgSrc: 'https://source.unsplash.com/random',
    title: 'Vui chơi giải trí',
    content: 'Sở hữu hệ sinh thái nghỉ dưỡng đẳng cấp mang phong cách cổ tích như: khách sạn lâu đài Movenpick, hồ bơi vô cực, quảng trường biển,…',
    btnLabel: 'Khám phá ngay',
  },
  {
    imgSrc: 'https://source.unsplash.com/random',
    title: 'NGHỈ DƯỠNG CAO CẤP',
    content: 'Nằm trọn không gian khí hậu quanh năm nắng ấm và hòa cùng cảnh quan rừng biển Hồ Tràm, những ngôi biệt thự The Tropicana khoác lên mình "chiếc áo" phóng khoáng đặc trưng...',
    btnLabel: 'Khám phá ngay',
  },
  {
    imgSrc: 'https://source.unsplash.com/random',
    title: 'DỊCH VỤ LƯU TRÚ',
    content: 'Biệt thự thương mại – Shop Villa có thiết kế công năng kép độc đáo. Tầng 1 với ưu thế căn góc & sân vườn khoáng đạt, được linh hoạt...',
    btnLabel: 'Khám phá ngay',
  },
  {
    imgSrc: 'https://source.unsplash.com/random',
    title: 'ẨM THỰC THƯƠNG MẠI',
    content: 'Biệt thự thương mại – Shop Villa có thiết kế công năng kép độc đáo. Tầng 1 với ưu thế căn góc & sân vườn khoáng đạt, được linh hoạt...',
    btnLabel: 'Khám phá ngay',
  },
];

const ExperienceJourney:React.FC = () => {
  useMainLayout('another');
  return (
    <>
      <section>
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="s-content s-wrap">
        <Experience data={dummyData} />
      </section>
    </>
  );
};

export default ExperienceJourney;
