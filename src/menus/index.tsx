import type { SideMenu } from '@@/common'
import { Icon } from '@iconify/react'

const defaultMenus: SideMenu[] = [
  {
    label: '仪表盘',
    key: 'dashbarod',
    icon: <Icon icon="la:tachometer-alt" />,
    children: [
      {
        label: '工作空间',
        key: '/dashboard',
        rule: '/dashboard'
      }
    ]
  }
]

export default defaultMenus
