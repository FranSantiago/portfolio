import styled from 'styled-components';
import { Hamburger } from '@styled-icons/fa-solid';

import LANDING from '@/constants/landing';

export const HamburgerIcon = styled(Hamburger)`
  height: 1.5rem;

  cursor: pointer;
`;

export const Content = styled.div`
  height: 100%;
  width: ${() => LANDING.margins.width};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 775px) {
    min-width: ${LANDING.margins.minWidth};
  }
`;

export const Wrapper = styled.div`
  background-color: var(--primary-bg);
  display: flex;
  justify-content: center;

  height: 7vh;
  width: 100vw;

  position: fixed;

  z-index: 1;
`;
