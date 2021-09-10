import { useContext, useEffect } from 'react';

import { MainLayoutContext, PageType } from 'container/MainLayout';

const useMainLayout = (type: PageType) => {
  const mainLayoutContext = useContext(MainLayoutContext);

  useEffect(() => {
    if (mainLayoutContext?.setPageType) {
      mainLayoutContext.setPageType(type);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMainLayout;
