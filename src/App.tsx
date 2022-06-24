import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import WebFontLoader from 'webfontloader';

import BackToTop from '@/components/back-to-top';
import Blanket from '@/components/blanket';
import Navbar from '@/components/navbar';

import Routes from '@/routes';

import breakpoints from '@/constants/breakpoints';

import { useAppDispatch } from '@/store';
import { setIsScrolling, setIsSmallScreen } from '@/store/ducks/page';

import useScrolling from '@/hooks/use-scrolling';

import GlobalStyles from '@/styles/global.styles';

function App() {
  const dispatch = useAppDispatch();

  const [isBlanketVisible, setIsBlanketVisible] = useState(false);
  const [isScrolling] = useScrolling();

  const isSmallScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.small.width.max}px)`,
  });

  useEffect(() => {
    WebFontLoader.load({
      google: {
        families: ['Raleway:400,500,600,700', 'Indie Flower', 'sans-serif'],
      },
    });
  }, []);

  useEffect(() => {
    if (!isSmallScreen) setIsBlanketVisible(false);

    dispatch(setIsSmallScreen(isSmallScreen));
  }, [isSmallScreen]);

  useEffect(() => {
    dispatch(setIsScrolling(isScrolling));
  }, [isScrolling]);

  return (
    <>
      <Blanket
        isVisible={isBlanketVisible}
        onClickOption={() => setIsBlanketVisible(false)}
        onClose={() => setIsBlanketVisible(!isBlanketVisible)}
      />

      <Navbar onClickHamburger={() => setIsBlanketVisible(!isBlanketVisible)} />

      <Routes />

      <GlobalStyles />

      {isScrolling && <BackToTop />}
    </>
  );
}

export default App;
