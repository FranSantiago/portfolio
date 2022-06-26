import styled from 'styled-components';

export const techCardWidthAndHeight = '12.5rem';

export const Description = styled.p`
  font-size: 1.05rem;
  color: var(--secondary-text);

  margin-top: 0.2rem;
`;

export const IconWrapper = styled.div`
  height: 2rem;
  width: 2rem;

  svg path {
    color: var(--tertiary-bg);
  }
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: normal;
  margin-top: 0.4rem;
`;

export const Wrapper = styled.div`
  height: ${techCardWidthAndHeight};
  width: ${techCardWidthAndHeight};

  background: var(--gray);

  padding: 1.5rem 1rem;

  transition: background 0.05s ease-in;

  :hover {
    cursor: pointer;

    background: var(--tertiary-bg);

    svg path,
    h1,
    p {
      color: white;
    }
  }
`;
