## useInterval

> 每间隔多少毫秒，触发回调

```tsx
import React, { useState } from 'react';
import { useInterval } from '@lvxiaowu/react-hooks';

export default () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, toggleIsRunning] = useState(true);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null,
  );

  return (
    <div>
      <div>
        delay:
        <input
          value={delay}
          onChange={event => setDelay(Number(event.target.value))}
        />
      </div>
      <h1>count: {count}</h1>
      <div>
        <button onClick={() => toggleIsRunning(!isRunning)}>
          {isRunning ? 'stop' : 'start'}
        </button>
      </div>
    </div>
  );
};
```

## Reference

```
useInterval(callback, delay?: number|null)
```
