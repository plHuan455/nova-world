import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from 'store/hooks';

const useGaTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);
  const { data } = useAppSelector((state) => state.systems);
  useEffect(() => {
    if (!data?.googleAnalytics) return;
    ReactGA.initialize(data.googleAnalytics);
    setInitialized(true);
  }, [data]);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default useGaTracker;
