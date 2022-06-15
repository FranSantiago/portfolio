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
    --gray: #afafaf;

    --header: #181818;
    --logo: #fff;
    --username: #9b9b9b;
    --search: #151515;

    font-family: 'Raleway', 'sans-serif';
  }
`;
