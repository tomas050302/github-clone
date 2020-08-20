import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html,body, :root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    background: var(--white);
  }

  :root {
    --primary: #24292e;
    --light-primary: #586069;
    --white: #fff;
    --highlight: #f9826c;
    --text: #1b1f23;
    --light-text: #e1e4e8;
    --light-link: #717880;
    --icon: #959da5;
    --icon-light: #6a737d;
    --lines: #d1d5da;
    --secondary-text: #666;
    --link-background: rgba(209,213,218,.5);
    --button-background: rgba(27,31,35,.15);
    --input-background: rgba(225, 228, 232, 0.2); 
    --button-background: #fafbfc;
    --button-hover: #f3f4f6;
    --content: #ccc;
    --link: #0366d6;
    --action: #2ea44f;
    --javascript: #f1e05a;
    --typescript: #2b7489;
    --css: #563d7c;
    --html: #e34c26;
    --php: #4F5D95;
    --c-sharp: #178600;
  }
`;
