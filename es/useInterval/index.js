import { useEffect, useRef } from 'react';

var useInterval = function useInterval(callback, delay) {
  var savedCallback = useRef(function () {});
  useEffect(function () {
    savedCallback.current = callback;
  });
  useEffect(function () {
    if (delay !== null) {
      var interval = setInterval(function () {
        return savedCallback.current();
      }, delay || 0);
      return function () {
        return clearInterval(interval);
      };
    }

    return undefined;
  }, [delay]);
};

export default useInterval;