import React from 'react';

import {
  DevLogo,
  DockerLogo,
  NodeLogo,
  ReactLogo,
  TerraformLogo,
  Wrapper,
} from './styles';

const DevIcon: React.FC = () => {
  return (
    <Wrapper>
      <DevLogo />
      <DockerLogo />
      <NodeLogo />
      <ReactLogo />
      <TerraformLogo />
    </Wrapper>
  );
};

export default DevIcon;
