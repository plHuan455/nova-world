import LibraryImage1 from 'assets/images/img-library-1.jpg';
import LibraryImage2 from 'assets/images/img-library-2.jpg';
import LibraryImage3 from 'assets/images/img-library-3.jpg';
import { LibraryCard } from 'components/templates/LibraryHome';

const card: LibraryCard[] = [
  {
    id: 0,
    title: 'GIỚI THIỆU DỰ ÁN',
    thumbnail: LibraryImage1,
    alt: 'GIỚI THIỆU DỰ ÁN',
    href: 'thu-vien',
  },
  {
    id: 1,
    title: 'TIẾN ĐỘ',
    thumbnail: LibraryImage2,
    alt: 'TIẾN ĐỘ',
    href: 'thu-vien',
  },
  {
    id: 2,
    title: 'SỰ KIỆN',
    thumbnail: LibraryImage3,
    alt: 'SỰ KIỆN',
    href: 'thu-vien',
  },
];

export default { card };
