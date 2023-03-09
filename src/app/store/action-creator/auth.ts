import { AppDispatch } from '..'
import AuthService from '../api/authService'
import { authSlice } from '../slices/authSlice'
import { snackbarSlice } from '../slices/snackbarSlise'

export const registration =
  (email: string, password: string, firstName: string, lastName: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.userFetching())
      const response = await AuthService.registration(
        email,
        password,
        firstName,
        lastName
      )
      localStorage.setItem('token', response.data.accessToken)
      dispatch(authSlice.actions.userFetchingSuccess(response.data))
      if (!response.data.user.isActivated) {
        dispatch(
          snackbarSlice.actions.enqueueSnackbar({
            id: new Date().getTime(),
            message:
              'Вы зарегистрировались, на почту отправленная ссылка для подтверждения',
            variant: 'success',
          })
        )
      } else {
        dispatch(
          snackbarSlice.actions.enqueueSnackbar({
            id: new Date().getTime(),
            message: 'Вы успешно зарегистрировались',
            variant: 'success',
          })
        )
      }
    } catch (e: any) {
      dispatch(
        snackbarSlice.actions.enqueueSnackbar({
          id: new Date().getTime(),
          message: e.response.data.message,
          variant: 'error',
        })
      )
    }
  }

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.userFetching())
      const response = await AuthService.login(email, password)
      dispatch(authSlice.actions.userFetchingSuccess(response.data))
      localStorage.setItem('token', response.data.accessToken)
      dispatch(
        snackbarSlice.actions.enqueueSnackbar({
          id: new Date().getTime(),
          message: 'Вы успешно вошли в аккаунт',
          variant: 'success',
        })
      )
    } catch (e: any) {
      dispatch(
        snackbarSlice.actions.enqueueSnackbar({
          id: new Date().getTime(),
          message: e.response.data.message,
          variant: 'error',
        })
      )
    }
  }

export const oauthGoogleLogin =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.userFetching())
      const response = await AuthService.oAuth2Google(token)
      if (response.data.accessToken) {
        dispatch(authSlice.actions.userFetchingSuccess(response.data))
        localStorage.setItem('token', response.data.accessToken)
        dispatch(
          snackbarSlice.actions.enqueueSnackbar({
            id: new Date().getTime(),
            message: 'Вы успешно вошли в аккаунт',
            variant: 'success',
          })
        )
      } else {
        dispatch(authSlice.actions.userFetchingSuccess(response.data))
        dispatch(
          snackbarSlice.actions.enqueueSnackbar({
            id: new Date().getTime(),
            message: 'Для окончания регистрации необходимо дополнить данные',
            variant: 'success',
          })
        )
      }
    } catch (e: any) {
      dispatch(
        snackbarSlice.actions.enqueueSnackbar({
          id: new Date().getTime(),
          message: e.response.data.message,
          variant: 'error',
        })
      )
    }
  }

export const oauthYandexLogin =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.userFetching())
      const response = await AuthService.oAuth2yandex(token)
      if (response.data.accessToken) {
        dispatch(authSlice.actions.userFetchingSuccess(response.data))
        localStorage.setItem('token', response.data.accessToken)
        dispatch(
          snackbarSlice.actions.enqueueSnackbar({
            id: new Date().getTime(),
            message: 'Вы успешно вошли в аккаунт',
            variant: 'success',
          })
        )
      } else {
        dispatch(authSlice.actions.userFetchingSuccess(response.data))
        dispatch(
          snackbarSlice.actions.enqueueSnackbar({
            id: new Date().getTime(),
            message: 'Для окончания регистрации необходимо дополнить данные',
            variant: 'success',
          })
        )
      }
    } catch (e: any) {
      dispatch(
        snackbarSlice.actions.enqueueSnackbar({
          id: new Date().getTime(),
          message: e.response.data.message,
          variant: 'error',
        })
      )
    }
  }

export const cheackAuth = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.userFetching())
    const response = await AuthService.refresh()
    localStorage.setItem('token', response.data.accessToken)
    dispatch(authSlice.actions.userFetchingSuccess(response.data))
  } catch (e: any) {
    localStorage.removeItem('token')
    dispatch(
      snackbarSlice.actions.enqueueSnackbar({
        id: new Date().getTime(),
        message: e.response.data.message,
        variant: 'error',
      })
    )
  }
}

export const forgotPass = (email: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.userFetching())
    await AuthService.forgotPass(email)
    dispatch(
      snackbarSlice.actions.enqueueSnackbar({
        id: new Date().getTime(),
        message: 'Код отправлен на почту',
        variant: 'success',
      })
    )
  } catch (e: any) {
    dispatch(
      snackbarSlice.actions.enqueueSnackbar({
        id: new Date().getTime(),
        message: e.response.data.message,
        variant: 'error',
      })
    )
  }
}

export const validateCode = (code: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.userFetching())
    await AuthService.validateCode(code)
    dispatch(
      snackbarSlice.actions.enqueueSnackbar({
        id: new Date().getTime(),
        message: 'Код принят',
        variant: 'success',
      })
    )
  } catch (e: any) {
    dispatch(
      snackbarSlice.actions.enqueueSnackbar({
        id: new Date().getTime(),
        message: e.response.data.message,
        variant: 'error',
      })
    )
  }
}

export const switchForgotPass =
  (code: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.userFetching())
      await AuthService.switchForgotPass(code, password)
      dispatch(
        snackbarSlice.actions.enqueueSnackbar({
          id: new Date().getTime(),
          message: 'Пароль успешно изменен',
          variant: 'success',
        })
      )
    } catch (e: any) {
      dispatch(
        snackbarSlice.actions.enqueueSnackbar({
          id: new Date().getTime(),
          message: e.response.data.message,
          variant: 'error',
        })
      )
    }
  }
