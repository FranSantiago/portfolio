import styled from 'styled-components';
import { Close } from '@styled-icons/ionicons-solid';
import { Element } from 'react-scroll';
import breakpoints from '@/constants/breakpoints';

interface IWrapperProps {
  isVisible: boolean;
}

export const CloseIcon = styled(Close)`
  position: absolute;
  right: 0.7rem;
  top: 0.4rem;

  height: 3rem;

  cursor: pointer;
`;

export const Option = styled(Element)`
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.2rem;

  text-transform: uppercase;

  cursor: pointer;

  :hover {
    color: var(--primary-text);
  }

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    font-size: 1.5rem;
  }
`;

export const Wrapper = styled.div<IWrapperProps>`
  position: absolute;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background: var(--primary-bg);

  z-index: 10;

  div:not(:first-child) {
    margin-top: 1.5rem;
  }
`;
