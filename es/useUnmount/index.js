import { useRef, useEffect } from 'react';

var useUnmount = function useUnmount(fn) {
  var fnRef = useRef(fn); // update the ref each render so if it change the newest callback will be invoked

  fnRef.current = fn;
  useEffect(function () {
    return function () {
      return fnRef.current();
    };
  }, []);
};

export default useUnmount;