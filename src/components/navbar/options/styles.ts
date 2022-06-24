import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Option = styled(Link)`
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  :hover {
    color: var(--primary-text);
  }
`;

export const Wrapper = styled.div`
  display: flex;

  a:not(:first-child) {
    margin-left: 2rem;
  }
`;
