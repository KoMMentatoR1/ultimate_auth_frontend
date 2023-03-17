import { TextField, styled } from '@mui/material'

export const Input = styled(TextField)(({ theme }) => ({
  '& > div > input': {
    color: theme.input.main,
    textShadow:
      theme.mode === 'dark' ? `${theme.input.hover} 0 0 4px;` : 'none',
    translate: 'color .1s linear, text-shadow .1s linear',
  },
  '& > div.Mui-error > input': {
    color: theme.input.lightError,
    translate: 'color .1s linear',
  },
  '& div.MuiInput-underline:before': {
    borderBottom: `2px solid ${theme.input.disabled}`,
  },
  '& div.MuiInput-underline:hover:before': {
    borderBottom: `2px solid ${theme.input.disabled}`,
  },
  '& div.MuiInput-underline:after': {
    borderBottom: `2px solid ${theme.input.disabled}`,
  },
  '& div.Mui-disabled > input': {
    "-webkit-text-fill-color": theme.input.disabled,
  },
  '& div.MuiInputBase-colorPrimary:before': {
    color: theme.input.disabled,
  },
  '& div.MuiInputBase-colorPrimary:hover:before': {
    color: theme.input.disabled,
  },
  '& div.MuiInputBase-colorPrimary:after': {
    color: theme.input.disabled,
  },
  '& > p': {
    textShadow:
      theme.mode === 'dark'
        ? `${theme.input.helperTextShadow} 0 0 6px;`
        : 'none',
    translate: 'text-shadow .1s linear',
  },
  '& > label': {
    color: theme.input.main,
    textShadow:
      theme.mode === 'dark' ? `${theme.input.hover} 0 0 4px;` : 'none',
    translate: 'color .1s linear, text-shadow .1s linear',
  },
  '&:hover > label': {
    color: theme.input.hover,
    translate: 'color .1s linear',
  },
  '& label.Mui-focused': {
    color: theme.input.hover,
    translate: 'color .1s linear',
  },
  '& div.MuiInput-root:after': {
    borderBottomColor: theme.input.hover,
    translate: 'border-bottom-color .1s linear',
  },
  '& div.MuiInput-root:before': {
    borderBottomColor: theme.input.main,
    translate: 'border-bottom-color .1s linear',
  },
  '&:hover > div:not(.Mui-disabled, .Mui-error):before': {
    borderBottom: `2px solid ${theme.input.hover}`,
    translate: 'border-bottom-color .1s linear',
  },
  '& > label.Mui-error': {
    color: theme.input.error,
    textShadow:
      theme.mode === 'dark' ? `${theme.input.darkError} 0 0 4px;` : 'none',
    translate: 'color .1s linear, text-shadow .1s linear',
  },
  '&:hover > label.Mui-error': {
    color: theme.input.darkError,
    translate: 'color .1s linear',
  },
  '& label.Mui-focused.Mui-error': {
    color: theme.input.darkError,
    translate: 'color .1s linear',
  },
  '& div.Mui-error:after': {
    borderBottomColor: theme.input.darkError,
    translate: 'border-bottom-color .1s linear',
  },
  '& div.Mui-error:before': {
    borderBottomColor: theme.input.error,
    translate: 'border-bottom-color .1s linear',
  },
  '& div > button': {
    color: theme.input.main,
  },
  '& div > button:hover': {
    color: theme.input.hover,
  },
  '& div.Mui-error > button': {
    color: theme.input.error,
  },
  '& div.Mui-error > button:hover': {
    color: theme.input.darkError,
  },
  '& div > input:-webkit-autofill': {
    '-webkit-text-fill-color': theme.input.main,
  },
  '& label.Mui-disabled': {
    textShadow: 'none',
    color: theme.input.disabled,
  },
  '& div.Mui-disabled:before ': {
    textShadow: 'none',
    borderBottomColor: theme.input.disabled,
  },
}))
