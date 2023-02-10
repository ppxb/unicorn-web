import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isPhone: false,
    isCollapsed: false,
    selectedKeys: 'dashboard',
    openKeys: ['Dashboard']
  },
  reducers: {
    toggleCollapsed: (state, action) => {
      state.isCollapsed = !!action.payload
    },
    togglePhone: (state, action) => {
      state.isPhone = !!action.payload
    },
    setSelectedKeys: (state, action) => {
      state.selectedKeys = action.payload
    },
    setOpenKeys: (state, action) => {
      state.openKeys = action.payload
    }
  }
})

export const { toggleCollapsed, togglePhone, setSelectedKeys, setOpenKeys } =
  menuSlice.actions

export default menuSlice.reducer
