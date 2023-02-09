import { AppDispatch } from '..'
import { snackbarSlice } from '../slices/snackbarSlise'

export const addSnack =
  (message: string, variant: 'success' | 'warning' | 'error' | 'info') =>
  (dispatch: AppDispatch) => {
    const id = new Date().getTime()
    dispatch(snackbarSlice.actions.enqueueSnackbar({ id, message, variant }))
  }
