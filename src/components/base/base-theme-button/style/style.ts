import { styled, IconButton } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

export const CustomDarkModeIcon = styled(DarkModeIcon)`
  transition: 'color .1s linear';
`

export const CustomLightModeIcon = styled(LightModeIcon)`
  transition: 'color .1s linear';
`
export const ThemeButton = styled('div')(({ theme }) => ({
  color: theme.primary.main,
  ':hover': {
    color: theme.primary.hover,
  },
  transition: 'color .1s linear',
}))
