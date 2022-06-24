import React from 'react';

import Presentation from './presentation';
import { Wrapper } from './styles';
import WhoAmI from './who-am-i';

const Landing: React.FC = () => {
  return (
    <Wrapper>
      <Presentation />
      <WhoAmI />
    </Wrapper>
  );
};

export default Landing;
