import type { SubMenuType } from 'antd/es/menu/hooks/useItems'
import React from 'react'

export interface Result<T = unknown> {
  code: number
  msg: string
  data: T
  timestamp: number
}

export interface SideMenu
  extends Omit<SubMenuType, 'children' | 'label' | 'icon'> {
  label: string
  key: string
  icon?: React.ReactNode | string
  rule?: string
  nav?: string
  children?: SideMenu[]
}
