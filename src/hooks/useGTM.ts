import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import { useAppSelector } from 'store/hooks';

const useGTM = () => {
  const { data } = useAppSelector((state) => state.systems);
  useEffect(() => {
    if (!data?.googleTagManager) return;
    TagManager.initialize({
      gtmId: data.googleTagManager,
    });
  }, [data]);
};

export default useGTM;
