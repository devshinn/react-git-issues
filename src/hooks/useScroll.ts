import { throttle } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

export function useScroll() {
  const [scrollHeight, setScrollHeight] = useState(document.documentElement.scrollHeight);
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(window.innerHeight);
  const listener = useCallback(() => {
    setScrollHeight(document.documentElement.scrollHeight);
    setScrollY(window.scrollY + document.documentElement.clientHeight);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const throttleListener = throttle(() => {
      listener();
    }, 50);

    window.addEventListener('scroll', throttleListener);
    return () => {
      window.removeEventListener('scroll', throttleListener);
    };
  });

  return {
    scrollHeight,
    scrollY,
    height,
  };
}
