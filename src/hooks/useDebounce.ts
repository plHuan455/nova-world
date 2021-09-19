/* eslint-disable @typescript-eslint/no-explicit-any */
const useDebounce = <F extends (...args: any) => void>(func: F, waitFor: number) => {
  let timeout: NodeJS.Timeout;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
export default useDebounce;
