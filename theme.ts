import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#313e50',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: '20px',
        },
      },
    },
  },
});
