import { createSlice } from '@reduxjs/toolkit'

export type ThemeType = 'dark' | 'light'

export const commonSlice = createSlice({
  name: 'public',
  initialState: {
    theme: 'light' as ThemeType,
    isFullscreen: false,
    isRefresh: false,
    isRefreshPage: false
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    setFullscreen: (state, action) => {
      state.isFullscreen = action.payload
    },
    setRefresh: (state, action) => {
      state.isRefresh = action.payload
    },
    setRefreshPage: (state, action) => {
      state.isRefreshPage = action.payload
    }
  }
})

export const { setTheme, setFullscreen, setRefresh, setRefreshPage } =
  commonSlice.actions

export default commonSlice.reducer
