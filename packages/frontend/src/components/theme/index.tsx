import { createTheme, CssBaseline } from '@mui/material';
import { PropsWithChildren, useCallback, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';

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

export type ConfigProviderProps = PropsWithChildren<Maybe<{}>>

type ColorTypeOption = 'dark' | 'light'
type ColorTypeThemeType = {
  color: string;
  bodyColor: string;
  shadowListInsertOpacity: string;
  button: {
    text: {
      color: string
    },
  };
}

function ThemeConfigProvider({ children }: ConfigProviderProps) {
  const colorTheme: {
    [key in ColorTypeOption]: ColorTypeThemeType;
  } = {
    dark: {
      color: '#403E3B',
      bodyColor: '#78746F',
      shadowListInsertOpacity: '.05',
      button: {
        text: {
          color: '#FFFFFF'
        }
      }
    },
    light: {
      color: '#E9E2D9',
      bodyColor: 'rgba(255, 247, 237, .5)',
      shadowListInsertOpacity: '.3',
      button: {
        text: {
          color: '#1F1E1C'
        }
      }
    },
  }

  const getAlgorihmTheme = useCallback((): ColorTypeOption => {
    const hour = new Date().getHours();
    return hour >= 17 || hour < 6 ? 'dark' : 'light';
  }, [])

  const getColorTheme = useCallback((): ColorTypeThemeType => {
    const name = getAlgorihmTheme();
    return colorTheme?.[name]
  }, [getAlgorihmTheme])


  const theme = useMemo(() => createTheme({
    mainColor: getColorTheme()?.color,
    listShadow: {
      borderRadius: 20,
      boxShadow: `
        0 0 50px rgba(0, 0, 0, .1),
        -5px 5px 5px rgba(0, 0, 0, .3),
        inset -2px 4px 5px rgba(255, 255, 255, ${getColorTheme()?.shadowListInsertOpacity}),
        inset -10px 10px 100px 0px rgba(255, 255, 255, .1)
      `
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: getColorTheme()?.bodyColor,
            // color: '#333333',
          },
        },
      },
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
            color: getColorTheme()?.button?.text?.color
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
        main: getColorTheme()?.color,
        // light: '#D9CDC3',
        // dark: '#D9CDC3',
        // contrastText: '#D9CDC3'
      },
      error: {
        main: '#FF4466',
      },
      success: {
        main: '#71BD8D',
      },
    },
  }), []);

  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    {children}
  </ThemeProvider>
}

export default ThemeConfigProvider;