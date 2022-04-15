// https://www.jianshu.com/p/412c874c5add
import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '../misc/util';

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
