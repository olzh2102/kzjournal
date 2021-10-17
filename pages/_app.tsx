import '../styles/globals.css'

import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { theme } from '../theme'


const App = ({ Component, pageProps }: AppProps) => 
  <> 
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  </>
  
export default App
