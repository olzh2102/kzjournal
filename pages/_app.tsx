import type { AppProps } from 'next/app';
import { ThemeProvider as EmotionThemeProvider } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from 'theme';
import Header from 'components/Header';

import 'styles/globals.css';

const App = ({ Component, pageProps }: ComponentWithPageLayout) => (
  <MuiThemeProvider theme={theme}>
    <EmotionThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </EmotionThemeProvider>
  </MuiThemeProvider>
);

export default App;

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
};
