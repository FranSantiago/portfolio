import styled from 'styled-components';

export const wideCardDimensions = {
  heigth: '6rem',
  width: '21rem',
};

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: var(--primary-text);

  @media only screen and (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: normal;

  margin-bottom: 1rem;

  @media only screen and (max-width: 660px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }
`;

export const Wrapper = styled.div`
  z-index: 2;
  height: ${wideCardDimensions.heigth};
  width: ${wideCardDimensions.width};

  background: #313132;

  padding: 1.2rem 1.5rem;

  transition: background 0.05s ease-in;

  :hover {
    cursor: pointer;

    background: var(--tertiary-bg);

    h1,
    p {
      color: white;
    }
  }

  @media only screen and (max-width: 660px) {
    height: 5rem;
    width: 20rem;

    padding: 1rem 1.5rem;
  }

  @media only screen and (max-width: 420px) {
    height: 4.5rem;

    padding: 0.8rem 1.5rem;
  }
`;
