import { useEffect } from 'react';
import { on, off, isBrowser } from '../misc/util';
import useRafState from '../useRafState';

const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [size, setSize] = useRafState({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
  });

  useEffect((): (() => void) | void => {
    if (isBrowser) {
      const handler = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      on(window, 'resize', handler);

      return () => {
        off(window, 'resize', handler);
      };
    }
  }, []);

  return size;
};

export default useWindowSize;
