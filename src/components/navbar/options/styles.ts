import styled from 'styled-components';
import { Element } from 'react-scroll';

export const Option = styled(Element)`
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  :hover {
    color: var(--primary-text);
  }
`;

export const Wrapper = styled.div`
  display: flex;

  div:not(:first-child) {
    margin-left: 2rem;
  }
`;
