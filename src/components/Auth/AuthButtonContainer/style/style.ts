import { Button, styled } from '@mui/material'

export const ButtonContainer = styled('div')`
  display: flex;
  gap: 45px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`
export const AuthButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Rubik, sans-serif',
  backgroundColor: theme.background.button,
  boxShadow: theme.shadow.button,
  '&:hover': {
    backgroundColor: theme.background.buttonHover,
    boxShadow: theme.shadow.buttonHover,
  },
  transition: 'background-color 0.1s linear, box-shadow 0.1s linear',
}))

export const ForgotPassButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  top: '-15px',
  width: '100%',
  padding: '0 !important',
  justifyContent: 'flex-start',
  fontFamily: 'Rubik, sans-serif',
  fontSize: '14px',
  textTransform: 'none',
  color: theme.input.main,
  '&:hover': {
    color: theme.input.hover,
    background: 'transparent',
  },
  transition: 'color 0.1s linear',
}))
