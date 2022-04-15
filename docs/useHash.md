## useHash

> 监听、改变浏览器地址栏 hash

```tsx
import React, { useState, useEffect } from 'react';
import { useHash } from '@lvxiaowu/react-hooks';

export default () => {
  const [hash, setHash] = useHash();

  useEffect(() => {
    setHash('#/path/to/page?userId=123');
  }, []);

  return (
    <div>
      <div>window.location.href:</div>
      <div>
        <pre>{window.location.href}</pre>
      </div>
      <div>Edit hash: </div>
      <div>
        <input
          style={{ width: '100%' }}
          value={hash}
          onChange={e => setHash(e.target.value)}
        />
      </div>
    </div>
  );
};
```

## Reference

```
const [hash, setHash] = useHash()
```
