import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isCollapsed: false,
    selectedKeys: 'dashboard',
    openKeys: ['Dashboard']
  },
  reducers: {
    toggleCollapsed: (state, action) => {
      state.isCollapsed = !!action.payload
    },
    setSelectedKeys: (state, action) => {
      state.selectedKeys = action.payload
    },
    setOpenKeys: (state, action) => {
      state.openKeys = action.payload
    }
  }
})

export const { toggleCollapsed, setSelectedKeys, setOpenKeys } =
  menuSlice.actions

export default menuSlice.reducer
