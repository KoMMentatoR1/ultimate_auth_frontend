import { publicRoutes, userRoutes } from './routes'
import {
  Routes,
  Route,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom'
import { useTypeSelector } from '../../shared/hooks/useTypeSelector'
import { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import AuthService from '../store/api/authService'
import { useAction } from '../../shared/hooks/useAction'

const AppRouter = () => {
  const { user } = useTypeSelector(store => store.auth)
  const { snack } = useTypeSelector(store => store.snackbar)
  const { enqueueSnackbar } = useSnackbar()
  const navigator = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const singlParam = queryParams.get('code')

  const { oauthYandexLogin } = useAction()

  useEffect(() => {
    if (singlParam) {
      AuthService.oAuth2yandexToken(singlParam).then(data =>
        oauthYandexLogin(data.data.access_token)
      )
    }
  }, [singlParam])

  useEffect(() => {
    if (snack && snack.id) {
      enqueueSnackbar(snack.message, {
        autoHideDuration: 4000,
        variant: snack.variant,
        key: snack.id,
      })
    }
  }, [snack, enqueueSnackbar])

  useEffect(() => {
    if (!!user.user?.email && !user.accessToken) {
      navigator('/register')
    }
  }, [user])

  const getRouts = () => {
    if (user.accessToken) {
      switch (user.user?.role) {
        case '':
          return publicRoutes
        case 'USER':
          return userRoutes
        case 'INACTIVE_USER':
          return userRoutes
        default:
          return publicRoutes
      }
    } else {
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
