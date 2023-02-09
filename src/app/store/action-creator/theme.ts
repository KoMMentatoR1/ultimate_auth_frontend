import { AppDispatch } from '..'
import { themeSlice } from '../slices/themSlise'

export const switchTheme = (mode: string) => (dispatch: AppDispatch) => {
  dispatch(themeSlice.actions.themSwitch(mode))
  localStorage.setItem('theme', mode)
}
