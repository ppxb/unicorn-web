import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    permissions: [],
    userInfo: {
      uuid: '',
      mobile: '',
      name: ''
    }
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setPermissions: (state, action) => {
      state.permissions = action.payload
    },
    clearUserInfo: state => {
      state.userInfo = {
        uuid: '',
        mobile: '',
        name: ''
      }
    }
  }
})

export const { setUserInfo, setPermissions, clearUserInfo } = userSlice.actions

export default userSlice.reducer
