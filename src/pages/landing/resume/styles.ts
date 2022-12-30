import { Element } from 'react-scroll';
import styled from 'styled-components';

import { techCardWidthAndHeight } from '@/components/tech-card/styles';

interface ITabProps {
  selected: boolean;
}

export const InterconnWrapper = styled.div`
  position: absolute;
  left: 25%;

  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding-top: 3rem;

  z-index: 1;

  div {
    height: 8rem;
    min-width: 50%;
    margin: 0;
  }

  div:nth-child(odd) {
    border-right: 5px solid var(--tertiary-bg);
  }

  div:nth-child(-n + 2) {
    border-bottom: 5px solid var(--tertiary-bg);
    border-top: 10px solid var(--tertiary-bg);
  }

  div:nth-child(n + 3) {
    border-bottom: 10px solid var(--tertiary-bg);
    border-top: 5px solid var(--tertiary-bg);
  }

  div:nth-child(even) {
    border-left: 5px solid var(--tertiary-bg);
  }

  @media only screen and (max-width: 660px) {
    height: 100%;

    div {
      display: none;
    }

    div:first-child {
      display: block;

      border-right: 10px solid var(--tertiary-bg);
      border-top: 0;
      border-bottom: 0;

      min-width: 0;
      height: 100%;
    }
  }
`;

export const MainContent = styled.div`
  margin: auto;
  max-width: 800px;

  padding-top: 5rem;

  @media only screen and (max-width: 660px) {
    padding-top: 1rem;
    max-width: 415px;
  }
  @media only screen and (max-width: 420px) {
    max-width: ${techCardWidthAndHeight};
  }
`;

export const StyledEducation = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 2rem;

  .widecard {
    margin-bottom: 1.8rem;
  }

  @media only screen and (max-width: 660px) {
    justify-content: center;

    .widecard {
      margin-bottom: 0;
    }

    .widecard:not(:last-child) {
      margin-bottom: 0.7rem;
    }
  }
`;

export const StyledExperience = styled.div`
  margin-top: 2rem;
`;

export const StyledSkills = styled.div`
  height: 420px;
`;

export const Tab = styled.div<ITabProps>`
  background: ${({ selected }) =>
    selected ? 'var(--primary-70)' : 'var(--gray)'};

  height: 2.5rem;
  width: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  color: white;

  :hover {
    background: var(--primary-70);
  }

  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > div:not(first-child) {
    margin-left: 0.5rem;
  }

  @media only screen and (max-width: 420px) {
    flex-direction: column;

    & > div:not(first-child) {
      margin-left: 0rem;
      margin-top: 0.5rem;
    }
  }
`;

export const Wrapper = styled(Element)`
  background-color: var(--secondary-bg);

  min-height: 100vh;
`;
