import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { themeSlice } from './slices/themSlise'
import { snackbarSlice } from './slices/snackbarSlise'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  theme: themeSlice.reducer,
  snackbar: snackbarSlice.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
