import styled from 'styled-components';

export default styled.div`
  position: relative;
  height: 4.25rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 1rem;

  background-color: var(--gray);

  cursor: pointer;

  ::before {
    content: '';

    position: absolute;

    width: 0.5rem;
    height: 100%;
    left: 0;
    background-color: var(--tertiary-bg);
  }

  p:first-child {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;
