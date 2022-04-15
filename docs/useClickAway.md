## useClickAway

> 点击指定区域外，执行回调函数

```tsx
import React, { useRef } from 'react';
import { useClickAway } from '@lvxiaowu/react-hooks';

export default () => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    console.log('区域外被点击');
  });
  return (
    <div
      ref={ref}
      style={{
        width: 200,
        height: 200,
        background: 'red',
      }}
    >
      点击红色区域外，
      <br />
      查看控制台
    </div>
  );
};
```

## Reference

```
useClickAway(ref, onMouseEvent);
useClickAway(ref, onMouseEvent, ['click']);
useClickAway(ref, onMouseEvent, ['mousedown', 'touchstart']);
```
