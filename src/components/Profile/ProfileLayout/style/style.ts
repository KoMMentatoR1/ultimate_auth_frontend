import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material'

export const LayoutMane = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: 'calc(100vh - 64px)',
}))

export const LayoutMenu = styled('div')(({ theme }) => ({
  width: '20%',
  height: '100%',
  marginTop: '64px',
  paddingLeft: '20px',
  position: 'static',
  background: theme.background.main,
  transition: 'background .1s linear',
}))

export const LayoutBody = styled('div')(({ theme }) => ({
  width: '80%',
  height: '100%',
  marginTop: '64px',
  padding: '20px',
  background: theme.background.main,
  transition: 'background .1s linear',
}))

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  color: theme.primary.main,
  ':hover': {
    color: theme.primary.hover,
  },
  transition: 'color .1s linear',
}))


export const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.primary.main,
  ':hover': {
    color: theme.primary.hover,
  },
  transition: 'color .1s linear',
}))

export const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: 'inherit',
  ':hover': {
    color: 'inherit',
  },
  transition: 'color .1s linear',

  '& > svg': {
    fontSize: '27px',
  },
}))

export const CustomListItemText = styled(ListItemText)(({ theme }) => ({
  '& > span': {
    fontSize: '22px',
  },
}))
