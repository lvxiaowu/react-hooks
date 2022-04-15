## useThrottle

> 节流：高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率。

```tsx
import React, { useState, useEffect } from 'react';
import { useThrottle } from '@lvxiaowu/react-hooks';

export default () => {
  const [value, setValue] = React.useState('');
  const throttledValue = useThrottle(value, 2000);
  const [lastThrottledValue, setLastThrottledValue] = React.useState(
    throttledValue,
  );

  useEffect(() => {
    if (lastThrottledValue !== throttledValue) {
      setLastThrottledValue(throttledValue);
    }
  });

  return (
    <div style={{ width: 300, margin: '40px auto' }}>
      <input
        type="text"
        value={value}
        placeholder="Throttled input"
        style={{ width: '100%' }}
        onChange={({ currentTarget }) => {
          setValue(currentTarget.value);
        }}
      />
      <br />
      <div>Throttled value: {throttledValue}</div>
    </div>
  );
};
```

## Reference

```
useThrottle(value, ms?: number);
```
