import { Box, IconButton, Toolbar, Typography } from '@mui/material'
import { ButtonContainer, CastomAppBar, HeaderBox } from '../style/style'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { BaseThemeButton } from '../../base/base-theme-button'

export const Header = () => {
  return (
    <CastomAppBar position='static'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <HeaderBox>
          <ButtonContainer>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ fontSize: '30px' }} />
            </IconButton>
          </ButtonContainer>
          <ButtonContainer>
            <Typography sx={{ fontSize: '30px' }} variant='h6' noWrap>
              Logo
            </Typography>
          </ButtonContainer>
        </HeaderBox>
        <HeaderBox>
          <BaseThemeButton fontSize='30px' />
          <ButtonContainer>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
            >
              <AccountCircle sx={{ fontSize: '30px' }} />
            </IconButton>
          </ButtonContainer>
        </HeaderBox>
      </Toolbar>
    </CastomAppBar>
  )
}
