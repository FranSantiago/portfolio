import React from 'react';

import Presentation from './presentation';
import HowDoIHelp from './how-do-i-help';
import Resume from './resume';
import WhoAmI from './who-am-i';

import { Wrapper } from './styles';

const Landing: React.FC = () => {
  return (
    <Wrapper>
      <Presentation />
      <WhoAmI />
      <HowDoIHelp />
      <Resume />
    </Wrapper>
  );
};

export default Landing;
