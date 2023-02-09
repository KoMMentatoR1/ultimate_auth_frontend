import { green, purple, red, grey } from '@mui/material/colors'

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
          main: green[400],
          hover: green[600],
        },
        background: {
          main: '#ffffff',
          button: green[600],
          buttonHover: green[700],
        },
        shadow: {
          dashboard: `0px 0px 30px 2px rgba(0, 0, 0, 0.6)`,
          button: 'none',
          buttonHover: 'none',
        },
        input: {
          main: green[500],
          hover: green[700],
          disabled: grey[600],
          error: red[400],
          darkError: red[600],
          lightError: red[200],
          helperText: red[700],
          helperTextShadow: red[900],
        },
      }
    : {
        primary: {
          main: purple[400],
          hover: purple[600],
        },
        background: {
          main: '#121212',
          button: purple[600],
          buttonHover: purple[700],
        },
        shadow: {
          dashboard: `0px 0px 30px 2px ${purple[400]}`,
          button: `0 0 5px 1px ${purple[600]}`,
          buttonHover: `0 0 5px 1px ${purple[700]}`,
        },
        input: {
          main: purple[200],
          hover: purple[400],
          disabled: purple[700],
          error: red[400],
          darkError: red[600],
          lightError: red[200],
          helperText: red[700],
          helperTextShadow: red[900],
        },
      }),
})
