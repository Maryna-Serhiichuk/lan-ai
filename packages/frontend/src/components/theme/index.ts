import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    mainColor: string,
    listShadow: {
      borderRadius?: number,
      boxShadow?: string
    };
  }
  interface ThemeOptions {
    mainColor: string,
    listShadow: {
      borderRadius?: number,
      boxShadow?: string
    };
  }
}

const mainColor = '#E9E2D9'

const theme = createTheme({
  mainColor: mainColor,
  listShadow: {
    borderRadius: 20,
    boxShadow: `
      0 0 50px rgba(0, 0, 0, .1),
      -5px 5px 5px rgba(0, 0, 0, .3),
      inset -2px 4px 5px rgba(255, 255, 255, .3),
      inset -10px 10px 100px 0px rgba(255, 255, 255, .1)
    `
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
        },
        outlined: {
          borderColor: '#1F1E1C',
          color: '#1F1E1C'
        },
        text: {
          color: '#1F1E1C'
        }
      },
    },
    MuiList: {
      styleOverrides: {
        root: ({ theme }) => theme?.listShadow,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 0, 0, .03)',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#DBD4CB',
          '&.Mui-checked': {
            color: '#B3ADA6',
          },
        },
      },
    }
  },
  palette: {
    background: {
      default: '#D9CDC3',
      paper: '#D9CDC3'
    },
    primary: {
      main: mainColor,
      // light: '#D9CDC3',
      // dark: '#D9CDC3',
      // contrastText: '#D9CDC3'
    }
  },
});

export default theme;