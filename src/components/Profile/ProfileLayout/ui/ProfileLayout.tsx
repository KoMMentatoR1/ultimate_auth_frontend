import { List, ListItemIcon, ListItemText } from '@mui/material'
import { FC } from 'react'
import { Header } from '../../../Header'
import {
  CustomListItemButton,
  CustomListItemIcon,
  CustomListItemText,
  LayoutBody,
  LayoutMane,
  LayoutMenu,
} from '../style/style'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShieldIcon from '@mui/icons-material/Shield'

interface ProfileLayoutProps {
  children?: React.ReactNode
}

const menu = [
  { name: 'Профиль', icon: <AccountCircleIcon /> },
  { name: 'Защита', icon: <ShieldIcon /> },
]

export const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <LayoutMane>
        <LayoutMenu>
          <List>
            {menu.map(el => (
              <CustomListItemButton>
                <CustomListItemIcon>{el.icon}</CustomListItemIcon>
                <CustomListItemText primary={el.name} />
              </CustomListItemButton>
            ))}
          </List>
        </LayoutMenu>
        <LayoutBody>{children}</LayoutBody>
      </LayoutMane>
    </div>
  )
}
