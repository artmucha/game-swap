import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  </>
);

export default App;
