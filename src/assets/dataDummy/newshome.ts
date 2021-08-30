import imgNewsCard from 'assets/images/img_newscard.png';
import imgNewsCard2 from 'assets/images/img_newscard2.png';
import imgNewsCard3 from 'assets/images/img_newscard3.png';
import { NewsCardProps } from 'components/molecules/NewsCard';
import { NewsHomeTabProps } from 'components/templates/NewsHome';

const newsHomeDataProject:NewsCardProps[] = [
  {
    imgSrc: imgNewsCard,
    ratio: '644x323',
    title: 'Habana Island Resort - Nơi trải nghiệm cuộc sống thượng lưu',
    desc: 'Lấy cảm hứng từ vùng Caribbean xinh đẹp, nơi pha trộn nhiều sắc màu văn hóa cùng trải nghiệm thượng lưu, những gam màu căng tràn nhựa sống hòa vào từng kiến trúc độc đáo...',
    updatedate: 'Cập nhật lúc 10:00 - 03/08/2021',
    href: '',
  },
  {
    direction: 'horizontal',
    imgSrc: imgNewsCard2,
    ratio: '450x248',
    title: 'Trải nghiệm nét đẹp văn hóa địa phương trong không gian...',
    href: '',
  },
  {
    direction: 'horizontal',
    imgSrc: imgNewsCard3,
    ratio: '450x248',
    title: 'Hòa mình vào không gian Latin chuẩn 6 sao với Habana Island resort',
    href: '',
  },
];

const newsHomeDataMarket:NewsCardProps[] = [
  {
    imgSrc: imgNewsCard,
    ratio: '644x323',
    title: 'Habana Island Resort - Nơi trải nghiệm cuộc sống thượng lưu',
    desc: 'Lấy cảm hứng từ vùng Caribbean xinh đẹp, nơi pha trộn nhiều sắc màu văn hóa cùng trải nghiệm thượng lưu, những gam màu căng tràn nhựa sống hòa vào từng kiến trúc độc đáo...',
    updatedate: 'Cập nhật lúc 10:00 - 03/08/2021',
    href: '',
  },
  {
    direction: 'horizontal',
    imgSrc: imgNewsCard2,
    ratio: '450x248',
    title: 'Trải nghiệm nét đẹp văn hóa địa phương trong không gian...',
    href: '',
  },
  {
    direction: 'horizontal',
    imgSrc: imgNewsCard3,
    ratio: '450x248',
    title: 'Hòa mình vào không gian Latin chuẩn 6 sao với Habana Island resort',
    href: '',
  },
];

const newsHomeDataCorporation:NewsCardProps[] = [
  {
    imgSrc: imgNewsCard,
    ratio: '644x323',
    title: 'Habana Island Resort - Nơi trải nghiệm cuộc sống thượng lưu',
    desc: 'Lấy cảm hứng từ vùng Caribbean xinh đẹp, nơi pha trộn nhiều sắc màu văn hóa cùng trải nghiệm thượng lưu, những gam màu căng tràn nhựa sống hòa vào từng kiến trúc độc đáo...',
    updatedate: 'Cập nhật lúc 10:00 - 03/08/2021',
    href: '',
  },
  {
    direction: 'horizontal',
    imgSrc: imgNewsCard2,
    ratio: '450x248',
    title: 'Trải nghiệm nét đẹp văn hóa địa phương trong không gian...',
    href: '',
  },
  {
    direction: 'horizontal',
    imgSrc: imgNewsCard3,
    ratio: '450x248',
    title: 'Hòa mình vào không gian Latin chuẩn 6 sao với Habana Island resort',
    href: '',
  },
];

const tabDataNewsHome: NewsHomeTabProps[] = [
  {
    titleTab: 'TIN DỰ ÁN',
    dataNewsHome: newsHomeDataProject,
  },
  {
    titleTab: 'TIN THỊ TRƯỜNG',
    dataNewsHome: newsHomeDataMarket,
  },
  {
    titleTab: 'TIN TẬP ĐOÀN',
    dataNewsHome: newsHomeDataCorporation,
  },
];

export default tabDataNewsHome;
