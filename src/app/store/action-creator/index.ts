import * as AuthActionCreators from './auth'
import * as ThemeActionCreators from './theme'
import * as SnackbarActionCreators from './snackbar'

export default {
  ...AuthActionCreators,
  ...ThemeActionCreators,
  ...SnackbarActionCreators,
}
