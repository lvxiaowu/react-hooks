## useIntersection

> 判断指定元素视口区域内，[参考](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)；

```tsx
import React, { useState, useEffect } from 'react';
import { useIntersection } from '@lvxiaowu/react-hooks';

const Spacer = () => (
  <div
    style={{
      width: '200px',
      height: '300px',
      backgroundColor: 'whitesmoke',
    }}
  />
);

export default () => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'whitesmoke',
        overflow: 'scroll',
      }}
    >
      往下滚动
      <Spacer />
      <div
        ref={intersectionRef}
        style={{
          width: '100px',
          height: '100px',
          padding: '20px',
          backgroundColor: 'palegreen',
        }}
      >
        {intersection && intersection.intersectionRatio < 1
          ? '部分隐藏'
          : '视口中'}
      </div>
      <Spacer />
    </div>
  );
};
```

## Reference

```
useIntersection(
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit,
): IntersectionObserverEntry | null;
```
