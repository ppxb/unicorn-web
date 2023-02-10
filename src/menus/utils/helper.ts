import menu from '@/stores/menu'
import type { SideMenu } from '@@/common'
import { FireFilled } from '@ant-design/icons'

export const getPermittedMenu = (
  menus: SideMenu[],
  permissions: string[],
  result = ''
): string => {
  if (result) return result

  for (let i = 0; i < menus.length; i++) {
    if (hasChildren(menus[i]) && !result) {
      const childResult = getPermittedMenu(
        menus[i].children as SideMenu[],
        permissions,
        result
      )
      if (childResult) {
        result = childResult
        return result
      }
    }

    if (hasPermissions(menus[i], permissions) && !hasChildren(menus[i])) {
      result = menus[i].key
    }
  }
  return result
}

export const getOpenMenuByRoute = (route: string): string[] => {
  const arr = splitPath(route)
  const result: string[] = []

  if (arr.length > 0) result.push(arr[0])
  if (arr.length > 2) {
    let str = '/' + arr[0]
    for (let i = 1; i < arr.length - 1; i++) {
      str += '/' + arr[i]
      result.push(str)
    }
  }
  return result
}

export const splitPath = (path: string): string[] => {
  if (!path || typeof path !== 'string') return []

  const result = path?.split('/') || []
  if (result?.[0] === '') result.shift()
  return result
}

export const filterMenus = (
  menus: SideMenu[],
  permissions: string[]
): SideMenu[] => {
  const result: SideMenu[] = []

  console.log(menus, permissions)

  for (let i = 0; i < menus.length; i++) {
    // handle children menus
    if (hasChildren(menus[i])) {
      const result = filterMenus(menus[i].children as SideMenu[], permissions)
      menus[i].children = result?.length ? result : undefined
    }

    if (hasPermissions(menus[i], permissions) || hasChildren(menus[i]))
      result.push(menus[i])
  }

  return result
}

const hasChildren = (route: SideMenu): boolean => {
  return Boolean(route.children?.length)
}

const hasPermissions = (route: SideMenu, permissions: string[]): boolean => {
  return permissions?.includes(route?.rule || '')
}
