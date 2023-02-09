import { HashRouter } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import './App.css'
import AppRouter from './routes/AppRouter'
import { useAction } from '../shared/hooks/useAction'
import { createTheme, ThemeProvider } from '@mui/material'
import { getDesignTokens } from '../shared/helpers/them'
import { useTypeSelector } from '../shared/hooks/useTypeSelector'
import { SnackbarProvider } from 'notistack'

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
        <SnackbarProvider maxSnack={4}>
          <AppRouter />
        </SnackbarProvider>
      </ThemeProvider>
    </HashRouter>
  )
}
