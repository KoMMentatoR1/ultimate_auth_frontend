import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ThemState {
  mode: string
}

const initialState: ThemState = {
  mode: 'light',
}

export const themeSlice = createSlice({
  name: 'them',
  initialState,
  reducers: {
    themSwitch(state, action: PayloadAction<string>) {
      state.mode = action.payload
    },
  },
})
