import styled from 'styled-components';

import { ReactComponent as DevIcon } from '@/assets/dev.svg';
import { ReactComponent as DockerIcon } from '@/assets/docker.svg';
import { ReactComponent as NodeIcon } from '@/assets/node.svg';
import { ReactComponent as ReactIcon } from '@/assets/react.svg';
import { ReactComponent as TerraformIcon } from '@/assets/terraform.svg';

export const Wrapper = styled.div`
  position: relative;

  height: 35rem;
  width: 37rem;

  border-radius: 50%;
  background: linear-gradient(
    330.77deg,
    rgba(40, 41, 45, 1) -25.4%,
    rgba(40, 41, 45, 0) 73.4%
  );
`;

export const DevLogo = styled(DevIcon)`
  position: absolute;

  height: 25rem;

  left: 0;
  right: 0;
  top: 4rem;
`;

export const DockerLogo = styled(DockerIcon)`
  position: absolute;

  height: 8rem;

  right: 10rem;
  top: 2rem;
`;

export const NodeLogo = styled(NodeIcon)`
  position: absolute;

  height: 8rem;

  right: 0;
  bottom: 4rem;
`;

export const ReactLogo = styled(ReactIcon)`
  position: absolute;

  height: 10rem;
  bottom: 0;
`;

export const TerraformLogo = styled(TerraformIcon)`
  position: absolute;
  top: 0;

  height: 7rem;
`;
