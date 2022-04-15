## useWindowSize

> 监听浏览器尺寸变化

```tsx
import React, { useState } from 'react';
import { useWindowSize } from '@lvxiaowu/react-hooks';

export default () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <div>width: {width}</div>
      <div>height: {height}</div>
      <br />
      <div>改变浏览器窗口试试</div>
    </div>
  );
};
```
