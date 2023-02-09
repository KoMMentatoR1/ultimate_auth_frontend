import { publicRoutes, userRoutes } from './routes'
import { Routes, Route } from 'react-router-dom'
import { useTypeSelector } from '../../shared/hooks/useTypeSelector'
import { useEffect } from 'react'
import { useSnackbar } from 'notistack'

const AppRouter = () => {
  const { user } = useTypeSelector(store => store.auth)
  const { snack } = useTypeSelector(store => store.snackbar)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (snack && snack.id) {
      enqueueSnackbar(snack.message, {
        autoHideDuration: 4000,
        variant: snack.variant,
        key: snack.id,
      })
    }
  }, [snack, enqueueSnackbar])

  const getRouts = () => {
    switch (user.user.role) {
      case '':
        return publicRoutes
      case 'USER':
        return userRoutes
      case 'INACTIVE_USER':
        return userRoutes
      default:
        return publicRoutes
    }
  }

  return (
    <Routes>
      {getRouts().map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  )
}

export default AppRouter
