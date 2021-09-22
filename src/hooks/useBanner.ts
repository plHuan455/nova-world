import { useState } from 'react';

import useWindowResize from './useWindowResize';

import { getImageURL } from 'utils/functions';

const useBanner = (banners: BannersData[]): {imgSrc: string} => {
  const [imgSrc, setImgSrc] = useState('');

  const setBannerImageByWindowSize = () => {
    if (banners.length <= 0) return;
    const WIDTH = window.innerWidth;
    if (WIDTH > 991) setImgSrc(getImageURL(banners[0].data.imageDesktop));
    if (WIDTH <= 991 && WIDTH >= 767) {
      setImgSrc(getImageURL(banners[0].data.imageTablet));
    }
    if (WIDTH < 767) setImgSrc(getImageURL(banners[0].data.imageMobile));
  };

  useWindowResize(setBannerImageByWindowSize);

  return { imgSrc };
};

export default useBanner;
