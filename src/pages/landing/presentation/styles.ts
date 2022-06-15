import styled from 'styled-components';

import LANDING from '@/constants/landing';
import breakpoints from '@/constants/breakpoints';

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--tertiary-bg);
  border-radius: 5px;
  height: 25px;
  width: 160px;

  margin-bottom: 2rem;

  p {
    color: var(--tertiary-text);
  }
`;

export const Quote = styled.p`
  font-size: 46px;
  font-weight: 600;

  z-index: 1;

  span {
    display: block;
  }

  @media only screen and (max-width: ${breakpoints.small.max}px) {
    font-size: 38px;
  }
`;

export const Bio = styled.div`
  font-size: 28px;
  font-weight: 500;

  width: 40rem;

  margin-top: 1rem;

  z-index: 1;

  p {
    color: var(--secondary-text);
  }

  @media only screen and (max-width: ${breakpoints.small.max}px) {
    width: 100%;
    font-size: 23px;
  }
`;

export const Content = styled.div`
  display: flex;

  width: ${LANDING.margins.width};
  min-width: ${LANDING.margins.minWidth};

  @media only screen and (max-width: ${breakpoints.small.max}px) {
    min-width: 0;
  }
`;

export const LeftContent = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-end;
  width: 100%;

  @media only screen and (max-width: ${breakpoints.small.max}px) {
    justify-content: center;
  }
`;

export const InnerLeftContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const RightContent = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Social = styled.div`
  position: absolute;

  bottom: 2rem;
  right: 6rem;

  @media only screen and (max-width: ${breakpoints.small.max}px) {
    display: flex;
    justify-content: center;

    bottom: 1rem;
    left: 0;
    right: 0;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;

  overflow: hidden;
`;
