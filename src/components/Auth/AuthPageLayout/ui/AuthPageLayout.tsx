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
import { SimpleAuth } from '../../SimpleAuth'
import { BaseThemeButton } from '../../../base/base-theme-button'

interface AuthPageLayoutProps {
  title: string
  subTitle: string
  children: React.ReactNode
  authMode?: 'registration' | 'login'
  simpleAuth?: boolean
}

export const AuthPageLayout: FC<AuthPageLayoutProps> = ({
  title,
  subTitle,
  children,
  authMode = 'login',
  simpleAuth = true,
}) => {
  return (
    <Background>
      <Container simpleAuth={simpleAuth}>
        <DashboardContainer>
          <Dashboard simpleAuth={simpleAuth}>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            {children}
            <ThemButtonContainer>
              <BaseThemeButton />
            </ThemButtonContainer>
          </Dashboard>
          {simpleAuth ? <SimpleAuth authMode={authMode} /> : ''}
        </DashboardContainer>
      </Container>
    </Background>
  )
}
