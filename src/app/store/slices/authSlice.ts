import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../../shared/types/user'

export interface UserState {
  user: IUser
  isLoading: boolean
  error: string
  success: boolean
}

const initialState: UserState = {
  user: {
    accessToken: '',
    user: {
      id: 0,
      isActivated: false,
      email: '',
      role: '',
      lastName: '',
      firstName: '',
    },
  },
  isLoading: false,
  error: '',
  success: false,
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true
    },
    userFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    userClearError(state) {
      state.error = ''
    },
    userSetSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload
    },
    userClear(state) {
      state.isLoading = false
      state.user.accessToken = ''
      state.user.user = {
        id: 0,
        email: '',
        firstName: '',
        isActivated: false,
        lastName: '',
        role: '',
      }
    },
  },
})
