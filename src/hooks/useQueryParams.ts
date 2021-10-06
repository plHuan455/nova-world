import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryParams = <Params extends Record<string, any>>() => {
  const location = useLocation();

  const queryObject = useMemo(
    () => Object.fromEntries(new URLSearchParams(location.search || location.hash.replace('#', '?'))) as Params,
    [location.search, location.hash],
  );

  return queryObject;
};

export default useQueryParams;
