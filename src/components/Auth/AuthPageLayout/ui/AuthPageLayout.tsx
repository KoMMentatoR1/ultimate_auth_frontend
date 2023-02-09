import React, { FC } from 'react'
import {
  Background,
  Container,
  Dashboard,
  DashboardContainer,
  SubTitle,
  ThemButtonContainer,
  Title,
} from '../style/style'
import { IconButton } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTypeSelector } from '../../../../shared/hooks/useTypeSelector'
import { useAction } from '../../../../shared/hooks/useAction'
import { green, purple } from '@mui/material/colors'
import { SimpleAuth } from '../../SimpleAuth'

interface AuthPageLayoutProps {
  title: string
  subTitle: string
  children: React.ReactNode
  authMode?: 'registration' | 'login'
  simpleAuth?: boolean
}

const iconStyle = {
  color: green[700],
  fontSize: '30px',
  transition: 'color .1s linear',
}

export const AuthPageLayout: FC<AuthPageLayoutProps> = ({
  title,
  subTitle,
  children,
  authMode = 'login',
  simpleAuth = true,
}) => {
  const { mode } = useTypeSelector(state => state.theme)
  const { switchTheme } = useAction()

  return (
    <Background>
      <Container simpleAuth={simpleAuth}>
        <DashboardContainer>
          <Dashboard simpleAuth={simpleAuth}>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            {children}
            <ThemButtonContainer>
              <IconButton
                onClick={() => {
                  mode === 'light' ? switchTheme('dark') : switchTheme('light')
                }}
              >
                {mode === 'light' ? (
                  <DarkModeIcon sx={{ ...iconStyle }} />
                ) : (
                  <LightModeIcon sx={{ ...iconStyle, color: purple[600] }} />
                )}
              </IconButton>
            </ThemButtonContainer>
          </Dashboard>
          {simpleAuth ? <SimpleAuth authMode={authMode} /> : ''}
        </DashboardContainer>
      </Container>
    </Background>
  )
}
