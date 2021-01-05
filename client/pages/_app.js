import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import { WishlistProvider } from 'Providers/WishlistProvider';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <WishlistProvider>
        <Component {...pageProps} />
      </WishlistProvider>
    </ThemeProvider>
  </>
);

export default App;
