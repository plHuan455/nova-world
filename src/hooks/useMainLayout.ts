import { useContext, useState } from 'react';

import useDidMount from './useDidMount';
import useWindowResize from './useWindowResize';

import { MainLayoutContext } from 'container/MainLayout';
import { getImageURL } from 'utils/functions';

interface UseMainLayoutParams {
  isHome: boolean;
  banners?: BannersData[];
}
interface UseMainLayoutResponse {
  banner: string;
}

const useMainLayout = ({
  isHome,
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

  useDidMount(() => {
    if (mainLayoutContext?.setIsHome) {
      mainLayoutContext.setIsHome(isHome);
    }
  });

  return { banner };
};

export default useMainLayout;
