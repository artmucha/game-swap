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
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Kumbh Sans', sans-serif;
    color: #1a1a1a;
    background-color: #f5f5f5;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
