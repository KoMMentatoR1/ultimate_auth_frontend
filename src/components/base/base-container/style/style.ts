import { Box, styled } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundColor: theme.background.main,
  transition: 'background .1s linear',
}))
