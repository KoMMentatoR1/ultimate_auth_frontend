import { green, purple, red, grey, blue, blueGrey } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    mode: string
    primary: {
      main: string
      hover: string
    }
    background: {
      main: string
      button: string
      buttonHover: string
    }
    shadow: {
      dashboard: string
      button: string
      buttonHover: string
    }
    input: {
      main: string
      hover: string
      disabled: string
      error: string
      darkError: string
      lightError: string
      helperText: string
      helperTextShadow: string
    }
  }
  interface ThemeOptions {
    mode: string
    primary: {
      main: string
      hover: string
    }
    background: {
      main: string
      button: string
      buttonHover: string
    }
    shadow: {
      dashboard: string
      button: string
      buttonHover: string
    }
    input: {
      main: string
      hover: string
      disabled: string
      error: string
      darkError: string
      lightError: string
      helperText: string
      helperTextShadow: string
    }
  }
}

export const getDesignTokens = (mode: string) => ({
  mode,
  ...(mode === 'light'
    ? {
        primary: {
          main: blue[400],
          hover: blue[600],
        },
        background: {
          main: '#ffffff',
          button: blue[500],
          buttonHover: blue[700],
        },
        shadow: {
          dashboard: `0px 0px 30px 2px rgba(0, 0, 0, 0.6)`,
          button: 'none',
          buttonHover: 'none',
        },
        input: {
          main: blue[300],
          hover: blue[500],
          disabled: blueGrey[600],
          error: red[400],
          darkError: red[600],
          lightError: red[200],
          helperText: red[700],
          helperTextShadow: red[900],
        },
      }
    : {
        primary: {
          main: blue[400],
          hover: blue[600],
        },
        background: {
          main: '#121212',
          button: blue[500],
          buttonHover: blue[700],
        },
        shadow: {
          dashboard: `0px 0px 30px 2px ${blue[400]}`,
          button: `0 0 5px 1px ${blue[600]}`,
          buttonHover: `0 0 5px 1px ${blue[700]}`,
        },
        input: {
          main: blue[300],
          hover: blue[500],
          disabled: blueGrey[600],
          error: red[400],
          darkError: red[600],
          lightError: red[200],
          helperText: red[700],
          helperTextShadow: red[900],
        },
      }),
})
