import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryParams = <Params extends Record<string, any>>() => {
  const location = useLocation();

  const queryObject = useMemo(
    () => Object.fromEntries(new URLSearchParams(location.search)) as Params,
    [location.search],
  );

  return queryObject;
};

export default useQueryParams;
