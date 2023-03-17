import { Navigate } from 'react-router-dom'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import Profile from '../../pages/Profile/Profile'
import ForgotPass from '../../pages/ForgotPass/ForgotPass'
import SwitchPass from '../../pages/SwitchPass/SwitchPass'
import SecurityPage from '../../pages/SecurityPage/SecurityPage'

interface IRouter {
  path: string
  element: React.ReactNode
}

export const publicRoutes: Array<IRouter> = [
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/forgotPass',
    element: <ForgotPass />,
  },
  {
    path: '/forgotPass/:code',
    element: <SwitchPass />,
  },
  { path: '*', element: <Navigate to='/login' replace /> },
]

export const userRoutes: Array<IRouter> = [
  {
    path: '/Profile',
    element: <Profile />,
  },
  {
    path: '/Security',
    element: <SecurityPage />,
  },
  { path: '*', element: <Navigate to='/Profile' replace /> },
]
