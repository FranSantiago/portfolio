import styled from 'styled-components';
import { Hamburger } from '@styled-icons/fa-solid';

import LANDING from '@/constants/landing';
import navbar from '@/constants/navbar';
import breakpoints from '@/constants/breakpoints';

export const HamburgerIcon = styled(Hamburger)`
  height: 1.5rem;

  cursor: pointer;
  margin-left: auto;
`;

export const Content = styled.div`
  height: 100%;
  width: ${LANDING.margins.width};
  min-width: ${LANDING.margins.minWidth};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    justify-content: flex-end;
    min-width: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  height: ${navbar.height};
  width: 100vw;

  position: fixed;

  z-index: 1;
`;
