import { useCallback, useEffect, useState } from 'react';

export default (): [boolean] => {
  const MAX_SCROLL_Y = 150;
  const [isScrolling, setisScrolling] = useState(false);

  const trackScroll = useCallback(() => {
    if (window.scrollY > MAX_SCROLL_Y && !isScrolling) setisScrolling(true);
    else if (window.scrollY <= MAX_SCROLL_Y) setisScrolling(false);
  }, [window.scrollY]);

  useEffect(() => {
    window.addEventListener('scroll', trackScroll);

    return () => window.removeEventListener('scroll', trackScroll);
  }, []);

  return [isScrolling];
};
