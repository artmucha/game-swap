import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/organisms/Header';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header platform='playstation' />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
