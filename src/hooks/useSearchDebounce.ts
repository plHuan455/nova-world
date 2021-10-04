import { useRef, useEffect } from 'react';

const useSearchDebounce = (callback: Function, deps: Array<any>, timeout = 150): void => {
  const timeoutId = useRef<number>();

  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(callback, timeout);

    return (): void => { if (timeoutId.current) { clearTimeout(timeoutId.current); } };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useSearchDebounce;
