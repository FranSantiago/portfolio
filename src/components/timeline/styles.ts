import styled from 'styled-components';

interface IBallProps {
  bgColor: string;
}

export const Ball = styled.div<IBallProps>`
  background: ${({ bgColor }) => bgColor};

  height: 1.5rem;
  width: 1.5rem;

  border-radius: 50%;

  position: absolute;
  right: -0.7rem;
  top: 50%;

  ::after {
    content: '';

    background: ${({ bgColor }) => `${bgColor}33`};

    height: 2.5rem;
    width: 2.5rem;

    border-radius: 50%;

    position: absolute;
    right: -0.5rem;
    top: -32%;
  }

  @media only screen and (max-width: 420px) {
    height: 1rem;
    width: 1rem;

    right: -0.5rem;
    top: 50%;

    ::after {
      height: 1.75rem;
      width: 1.75rem;

      right: -0.4rem;
      top: -32%;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  width: 45%;

  .tl-card-description-subtitle {
    color: var(--secondary-text);
    text-align: justify;
    margin-top: 0.25rem;
  }

  .tl-card-description-techs {
    margin-top: 0.25rem;
  }
`;

export const Line = styled.div`
  border: 1px dashed var(--black);

  width: 0.1%;

  position: relative;
`;

export const Period = styled.div`
  width: 45%;
  text-align: right;

  .tl-card-period-subtitle {
    color: var(--secondary-text);
  }
`;

export const Wrapper = styled.div`
  .tl-card:not(:first-child) {
    margin-top: 0.1rem;
  }

  .tl-card:not(:first-child) .tl-card-period,
  .tl-card:not(:first-child) .tl-card-description {
    padding-top: 4rem;
  }
`;
