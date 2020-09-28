import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');

  *, *::before, *::after {
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

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
