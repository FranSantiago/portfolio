import styled from 'styled-components';

import breakpoints from '@/constants/breakpoints';

export const headerHeight = '15vh';

export const ContentWrapper = styled.div`
  height: calc(100vh - ${headerHeight});
`;

export const Section = styled.span`
  color: var(--secondary-text);
  font-size: 1.2rem;

  ::before,
  ::after {
    font-family: Arial, sans-serif;
  }

  ::before {
    content: '/**';

    margin-right: 0.2rem;
  }

  ::after {
    content: '**/';

    margin-left: 0.2rem;
  }

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    font-size: 2rem;
  }
`;

export const Wrapper = styled.div`
  grid-area: header-content;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  height: ${headerHeight};
`;
