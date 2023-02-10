import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './common'
import userReducer from './user'
import menuReducer from './menu'

export const store = configureStore({
  reducer: {
    common: commonReducer,
    user: userReducer,
    menu: menuReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
