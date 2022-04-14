import '../styles/globals.css'
import { theme } from '../styles/theme';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
      <CssBaseline />
    </ThemeProvider>
  );
}

export default MyApp
