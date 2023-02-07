import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './common'
import userReducer from './user'

export const store = configureStore({
  reducer: {
    common: commonReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
