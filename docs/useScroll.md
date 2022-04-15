## useScroll

> 监听指定区域的鼠标滚动

```tsx
import React, { useRef } from 'react';
import { useScroll } from '@lvxiaowu/react-hooks';

export default () => {
  const scrollRef = useRef(null);
  const { x, y } = useScroll(scrollRef);

  return (
    <div>
      <div>x: {x}</div>
      <div>y: {y}</div>
      <div
        ref={scrollRef}
        style={{
          width: '400px',
          height: '400px',
          backgroundColor: 'whitesmoke',
          overflow: 'scroll',
        }}
      >
        <div style={{ width: '2000px', height: '2000px' }}>滑动滚动条试试</div>
      </div>
    </div>
  );
};
```

## Reference

```
useScroll(ref: RefObject<HTMLElement>);
```
