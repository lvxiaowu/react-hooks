import { RefObject, useEffect } from 'react';
import { on, off } from '../misc/util';
import useRafState from '../useRafState';

export interface State {
  x: number;
  y: number;
}

const useScroll = (ref: RefObject<HTMLElement>): State => {
  const [state, setState] = useRafState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handler = () => {
      if (ref.current) {
        setState({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop,
        });
      }
    };
    if (ref.current) {
      on(ref.current, 'scroll', handler, {
        capture: false,
        passive: true,
      });
    }
    return () => {
      if (ref.current) {
        off(ref.current, 'scroll', handler);
      }
    };
  }, [ref]);

  return state;
};

export default useScroll;
