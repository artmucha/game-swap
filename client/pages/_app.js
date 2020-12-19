import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import { WishlistProvider } from 'Providers/WishlistProvider';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <WishlistProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </WishlistProvider>
    </ThemeProvider>
  </>
);

export default App;
