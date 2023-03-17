import { Button, styled } from '@mui/material'

export const BodyContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const Header = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontSize: '40px',
  paddingRight: '20%',
  color: theme.primary.main,
}))

export const Container = styled('div')(({ theme }) => ({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',

  marginRight: '20%',
}))

export const ShowButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Rubik, sans-serif',
  backgroundColor: theme.background.button,
  boxShadow: theme.shadow.button,
  '&:hover': {
    backgroundColor: theme.background.buttonHover,
    boxShadow: theme.shadow.buttonHover,
  },
  transition: 'background-color 0.1s linear, box-shadow 0.1s linear',
  width: '350px',
  maxWidth: '100%'
}))

export const ButtonContainer = styled('div')`
  display: flex;
  gap: 20px;
  width: 80%;
  margin-right: 20%;
  margin-top: 30px;
  justify-content: center;
  flex-direction: column;
`
