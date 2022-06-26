import styled from 'styled-components';
import { Element } from 'react-scroll';

import breakpoints from '@/constants/breakpoints';
import navbar from '@/constants/navbar';

export default styled(Element)`
  height: 100vh;
  width: 100%;

  overflow: hidden;

  border-bottom: 1px solid var(--gray);

  @media only screen and (max-width: ${breakpoints.xsmall.width
      .max}px) and (max-height: ${breakpoints.xsmall.height.max}px) {
    padding-top: calc(${navbar.height} + 2vh);
  }
`;
