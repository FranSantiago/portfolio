import styled from 'styled-components';

export default styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 45px;
  width: 230px;

  border: 1px solid var(--tertiary-bg);

  margin-top: 5rem;

  font-size: 16px;
  color: var(--primary-text);
  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;

  transition: background-color 0.25s, color 0.25s;

  z-index: 1;

  &:hover {
    background-color: var(--tertiary-bg);
    color: var(--tertiary-text);
  }
`;
