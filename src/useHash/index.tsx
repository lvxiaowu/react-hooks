import { useState, useEffect, useCallback } from 'react';
import { on, off } from '../misc/util';

const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  const onHashChange = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    on(window, 'hashchange', onHashChange);
    return () => {
      off(window, 'hashchange', onHashChange);
    };
  }, []);

  const _setHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = newHash;
      }
    },
    [hash],
  );

  return [hash, _setHash];
};

export default useHash;
