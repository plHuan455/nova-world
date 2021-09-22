import { useContext, useEffect, useState } from 'react';

import useWindowResize from './useWindowResize';

import { MainLayoutContext, PageType } from 'container/MainLayout';
import { getImageURL } from 'utils/functions';

interface UseMainLayoutParams {
  type: PageType;
  banners?: BannersData[];
}
interface UseMainLayoutResponse {
  banner: string;
}

const useMainLayout = ({
  type,
  banners,
}: UseMainLayoutParams): UseMainLayoutResponse => {
  const mainLayoutContext = useContext(MainLayoutContext);
  const [banner, setBanner] = useState('');

  const setBannerImageByWindowSize = () => {
    if (!banners || banners.length <= 0) return;
    const WIDTH = window.innerWidth;
    if (WIDTH > 991) setBanner(getImageURL(banners[0].data.imageDesktop));
    if (WIDTH <= 991 && WIDTH >= 767) {
      setBanner(getImageURL(banners[0].data.imageTablet));
    }
    if (WIDTH < 767) setBanner(getImageURL(banners[0].data.imageMobile));
  };

  useWindowResize(setBannerImageByWindowSize);

  useEffect(() => {
    if (mainLayoutContext?.setPageType) {
      mainLayoutContext.setPageType(type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { banner };
};

export default useMainLayout;
