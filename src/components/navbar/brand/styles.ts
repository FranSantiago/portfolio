import styled from 'styled-components';

export const FirstNameBrand = styled.span`
  font-weight: bold;

  ::before {
    content: '<';

    font-family: Arial, sans-serif;
    margin-right: 0.2rem;
  }
`;

export const LastNameBrand = styled.span`
  margin-left: 0.4rem;

  ::after {
    content: '/>';

    font-family: Arial, sans-serif;
    margin-left: 0.2rem;
  }
`;

export const Wrapper = styled.div`
  font-size: 20px;

  cursor: pointer;
`;
