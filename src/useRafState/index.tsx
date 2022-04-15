import { useEffect, useCallback, useRef, useState } from 'react';

const useRafState = (initialState: any) => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback(value => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return [state, setRafState];
};

export default useRafState;
