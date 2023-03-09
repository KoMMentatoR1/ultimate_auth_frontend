import { styled } from '@mui/material'

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
