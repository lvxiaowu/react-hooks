## useDebounce

> 防抖：触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间。

```tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useDebounce } from '@lvxiaowu/react-hooks';

export default () => {
  const [state, setState] = React.useState('Typing stopped');
  const [val, setVal] = React.useState('');
  const [debouncedValue, setDebouncedValue] = React.useState('');

  const [isReady, cancel] = useDebounce(
    () => {
      setState('Typing stopped');
      setDebouncedValue(val);
    },
    2000,
    [val],
  );

  return (
    <div>
      <input
        type="text"
        value={val}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setState('Waiting for typing to stop...');
          setVal(currentTarget.value);
        }}
      />
      <br />
      <br />
      <div>{state}</div>
      <div>
        Debounced value: {debouncedValue}
        <br />
        <button onClick={cancel}>Cancel debounce</button>
        <br />
        <button onClick={isReady}>isReady debounce</button>
      </div>
    </div>
  );
};
```

## Reference

```
const [
    isReady: () => boolean | null,
    cancel: () => void,
] = useDebounce(fn: Function, ms: number, deps: DependencyList = []);
```
