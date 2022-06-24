import React from 'react';
import { animateScroll } from 'react-scroll';

import { ArrowUpIcon, Wrapper } from './styles';

const BackToTop: React.FC = () => {
  return (
    <Wrapper onClick={() => animateScroll.scrollToTop()}>
      <ArrowUpIcon />
    </Wrapper>
  );
};

export default BackToTop;
