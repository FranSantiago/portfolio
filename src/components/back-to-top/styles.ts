import styled from 'styled-components';
import { AngleUp } from '@styled-icons/fa-solid';

import breakpoints from '@/constants/breakpoints';

const btnHeightWidth = 60;

export const ArrowUpIcon = styled(AngleUp)`
  height: ${btnHeightWidth - 20}px;
  width: ${btnHeightWidth - 20}px;

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    height: ${btnHeightWidth - 28}px;
    width: ${btnHeightWidth - 28}px;
  }
`;

export const Wrapper = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  height: ${btnHeightWidth}px;
  width: ${btnHeightWidth}px;

  bottom: 2rem;
  right: 5%;

  border-radius: 50%;
  cursor: pointer;

  background-color: var(--primary-70);

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    height: ${btnHeightWidth - 15}px;
    width: ${btnHeightWidth - 15}px;
  }
`;
