import { List, ListItemIcon, ListItemText } from '@mui/material'
import { FC } from 'react'
import { Header } from '../../../Header'
import {
  LayoutBody,
  LayoutMane,
  LayoutMenu,
} from '../style/style'

interface ProfileLayoutProps {
  children?: React.ReactNode
}

export const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {



  return (
    <div>
      <Header />
      <LayoutMane>
        <LayoutMenu>
          <List>
          </List>
        </LayoutMenu>
        <LayoutBody>{children}</LayoutBody>
      </LayoutMane>
    </div>
  )
}
