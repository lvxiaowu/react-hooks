## useTimeoutFn

> 多少毫秒后触发回调

```tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useTimeoutFn } from '@lvxiaowu/react-hooks';

export default () => {
  const [state, setState] = React.useState('Not called yet');

  function fn() {
    setState(`called at ${Date.now()}`);
  }

  const [isReady, cancel, reset] = useTimeoutFn(fn, 5000);
  const cancelButtonClick = useCallback(() => {
    if (isReady() === false) {
      cancel();
      setState(`cancelled`);
    } else {
      reset();
      setState('Not called yet');
    }
  }, []);

  const readyState = isReady();

  return (
    <div>
      <div>
        {readyState !== null
          ? 'Function will be called in 5 seconds'
          : 'Timer cancelled'}
      </div>
      <button onClick={cancelButtonClick}>
        {readyState === false ? 'cancel' : 'restart'} timeout
      </button>
      <br />
      <div>
        Function state:
        {readyState === false ? 'Pending' : readyState ? 'Called' : 'Cancelled'}
      </div>
      <div>{state}</div>
    </div>
  );
};
```

## Reference

```
const [
    isReady: () => boolean | null,
    cancel: () => void,
    reset: () => void,
] = useTimeoutFn(fn: Function, ms: number = 0);
```
