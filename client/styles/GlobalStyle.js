import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; 
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Kumbh Sans', sans-serif;
    color: #1a1a1a;
  }
`;

export default GlobalStyle;
