import { createTheme, ThemeProvider } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#fff'
    },
    error: {
      main: '#ff0000'
    },
    info: {
      main: '#d3d3d3',
    }
  },
   typography: {
    allVariants: {
      fontFamily: 'Roboto, sans-serif'
    }
  },
  breakpoints: {
    values: {
      xs: 0, 
      sm: 600, 
      md: 900, 
      lg: 1200, 
      xl: 1536
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontWeight: 400,
        variant: 'subtitle2',
      }
    },
    MuiStack: {
      defaultProps: {
        direction: 'row',
        spacing: 0,
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
        color: 'primary',
        variant: 'contained',
        disableRipple: true,
        disableElevation: true
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
        disableRipple: true
      }
    },
    MuiTextField: {
      defaultProps: {
        FormHelperTextProps: {
          style: { marginLeft: '0' }
        }
      }
    }
  }
})

const AppThemeProvider = (props: any) => {
  return (
    <ThemeProvider theme={theme}> 
      {props.children} 
    </ThemeProvider>
  )
};

export default AppThemeProvider;