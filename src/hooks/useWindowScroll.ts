import { useEffect } from 'react';

const useWindowScroll = (
  callback?:()=>void,
) => {
  const listener = ():void => {
    if (callback) callback();
  };
  useEffect(() => {
    window.addEventListener('scroll', listener);
    listener();
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });
};

export default useWindowScroll;
