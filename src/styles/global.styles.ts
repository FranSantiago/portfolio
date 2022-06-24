import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--primary-bg);
  }

  *, button, input {
    border: 0;
    background: none;
    color: var(--black);
    transition: color .2s ease-out;
  }
  
  ul {
    list-style: none;
  }

  :root {
    --primary-text: #03c4e8;
    --secondary-text: #7B7C80;
    --tertiary-text: #181D23;

    --primary-bg: #181D23;
    --secondary-bg: #121214;
    --tertiary-bg: #03c4e8;

    --black: #c6c6c6;
    --gray: #7A7A7A4C;

    --primary-70: #03c4e8b3;

    font-family: 'Raleway', 'sans-serif';
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--tertiary-bg);

    border-radius: 15px;
    box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
  }
`;
