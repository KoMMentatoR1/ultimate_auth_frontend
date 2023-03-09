import { Button, styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const SimpleAuthLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  width: '50%',
  padding: '45px',
}))

export const Title = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '40px',
  fontFamily: 'Rubik, sans-serif',
  fontWeight: '500',
  color: theme.primary.main,
  textShadow: theme.mode === 'dark' ? `${theme.primary} 0 0 8px` : 'none',
  marginBottom: '10px',
  paddingTop: '15px',
  textAlign: 'center',
  transition: 'text-shadow 0.1s linear, tcolor 0.1s linear',
}))

export const SimpleAuthButtonContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const SimpleAuthButton = styled(Button)(({ theme }) => ({
  width: '100%',
  background: theme.background.button,
  boxShadow: theme.shadow.button,
  '&:hover': {
    backgroundColor: theme.background.buttonHover,
    boxShadow: theme.shadow.buttonHover,
  },
  transition: 'background-color 0.1s linear, box-shadow 0.1s linear',
}))

export const OAuthLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#fff',
}))
