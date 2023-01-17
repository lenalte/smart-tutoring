import { createMuiTheme, ThemeProvider } from '@mui/core/styles';
import { App } from '../App';

const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#FF453C',
        main: '#FF453C',
        dark: '#FF453C',
        contrastText: '#fff',
    },
    secondary: {
        light: '#FF453C',
        main: '#FF453C',
        dark: '#FF453C',
        contrastText: '#000',
    }
  }
});

function myApp() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

export default myApp;




/*import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#FF453C',
      main: '#FF453C',
      dark: '#FF453C',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FF453C',
      main: '#FF453C',
      dark: '#FF453C',
      contrastText: '#000',
    },
  },
});*/
