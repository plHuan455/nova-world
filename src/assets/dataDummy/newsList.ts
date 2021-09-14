import { NewsCategoryType, ListPanelType } from 'components/templates/NewsList';

const news = {
  imgSrc: 'https://source.unsplash.com/random',
  title: 'Wonderland - Trải nghiệm kì nghỉ thần tiên với gia đình bạn',
  description: 'Bất động sản nghỉ dưỡng tại Việt Nam luôn được xem là phân khúc hấp dẫn trong mắt các nhà đầu tư.',
  href: '/',
};

export const newsList = new Array(4).fill(news);
export const cateList: NewsCategoryType[] = [
  {
    id: 0,
    label: 'Tin tức dự án',
    slug: '/a',
  },
  {
    id: 1,
    label: 'Tin tức thị trường',
    slug: '/b',
  },
  {
    id: 2,
    label: 'Tin tập đoàn',
    slug: '/c',
  },
];

export const listPanel: ListPanelType[] = [
  {
    id: 1,
    listNews: newsList,

  },
  {
    id: 2,
    listNews: newsList,

  },
  {
    id: 3,
    listNews: newsList,

  },
];

export default news;
