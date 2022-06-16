import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import WebFontLoader from 'webfontloader';

import Blanket from '@/components/blanket';
import GlobalStyles from '@/styles/global.styles';
import Landing from '@/pages/landing';
import Navbar from '@/components/navbar';

import breakpoints from '@/constants/breakpoints';

function App() {
  const [isBlanketVisible, setIsBlanketVisible] = useState(false);

  const isSmallScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.small.width.max}px)`,
  });

  useEffect(() => {
    WebFontLoader.load({
      google: {
        families: ['Raleway:400,500,600,700', 'sans-serif'],
      },
    });
  }, []);

  useEffect(() => {
    if (!isSmallScreen) setIsBlanketVisible(false);
  }, [isSmallScreen]);

  return (
    <BrowserRouter>
      <Blanket
        isVisible={isBlanketVisible}
        onClickOption={() => setIsBlanketVisible(false) /* TODO: scroll */}
        onClose={() => setIsBlanketVisible(!isBlanketVisible)}
      />
      <Navbar onClickHamburger={() => setIsBlanketVisible(!isBlanketVisible)} />

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
