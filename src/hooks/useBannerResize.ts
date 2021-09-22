import { useCallback, useState } from 'react';

import useWindowResize from './useWindowResize';

import { getImageURL } from 'utils/functions';

export type DataBannerType = {
  link?: string;
  title?: string;
  subTitle?: string;
  image?: string;
}

const useBannerResize = (
  banners?:BannersData[],
) => {
  const [dataBanner, setDataBanner] = useState<DataBannerType>();

  const setBannerImageByWindowSize = useCallback(
    () => {
      if (!banners || banners.length <= 0 || !banners[0]?.data) return;
      const infoBanner = {
        link: banners[0].data?.link,
        title: banners[0].data?.title,
        subTitle: banners[0].data?.subTitle,
      };

      const WIDTH = window.innerWidth;

      if (WIDTH > 991) {
        setDataBanner({
          ...infoBanner,
          image: getImageURL(banners[0].data?.imageDesktop),
        });
      }
      if (WIDTH <= 991 && WIDTH >= 767) {
        setDataBanner({
          ...infoBanner,
          image: getImageURL(banners[0].data?.imageTablet),
        });
      }
      if (WIDTH < 767) {
        setDataBanner({
          ...infoBanner,
          image: getImageURL(banners[0].data?.imageMobile),
        });
      }
    },
    [banners],
  );

  useWindowResize(setBannerImageByWindowSize);

  return dataBanner;
};

export default useBannerResize;
