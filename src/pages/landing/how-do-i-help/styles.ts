import styled from 'styled-components';

import GlobalWrapper from '@/styles/landing-sections-wrapper.styles';

import { techCardWidthAndHeight } from '@/components/tech-card/styles';

export const MainContent = styled.div`
  margin: auto;
  max-width: 630px;

  display: grid;
  grid-template-columns: repeat(auto-fill, ${techCardWidthAndHeight});
  column-gap: 0.8rem;
  row-gap: 0.8rem;

  padding-top: 5rem;

  border-bottom: 1px solid var(--gray);

  @media only screen and (max-width: 660px) {
    padding-top: 1rem;
    max-width: 415px;
  }
  @media only screen and (max-width: 420px) {
    max-width: ${techCardWidthAndHeight};
  }
`;

export const Wrapper = styled(GlobalWrapper)`
  height: 100vh;

  background-color: var(--primary-bg);

  @media only screen and (max-width: 420px) {
    height: 100%;
  }
`;
