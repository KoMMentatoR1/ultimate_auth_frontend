import { HashRouter } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import './App.css'
import AppRouter from './routes/AppRouter'
import { useAction } from '../shared/hooks/useAction'
import { createTheme, ThemeProvider } from '@mui/material'
import { getDesignTokens } from '../shared/helpers/them'
import { useTypeSelector } from '../shared/hooks/useTypeSelector'
import { SnackbarProvider } from 'notistack'
import { GoogleOAuthProvider } from '@react-oauth/google'

export const App = () => {
  const { switchTheme } = useAction()
  const { mode } = useTypeSelector(state => state.theme)
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  const { cheackAuth } = useAction()

  useEffect(() => {
    localStorage.getItem('token') && cheackAuth()
    switchTheme(localStorage.getItem('theme') || 'light')
  }, [])

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GoogleOAuthProvider clientId='1046915271119-jjotcaci7uroe80v8sr71ehh8nn80b54.apps.googleusercontent.com'>
          <SnackbarProvider maxSnack={4}>
            <AppRouter />
          </SnackbarProvider>
        </GoogleOAuthProvider>
      </ThemeProvider>
    </HashRouter>
  )
}
