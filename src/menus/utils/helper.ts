import type { SideMenu } from '@@/common'

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

const hasChildren = (route: SideMenu): boolean => {
  return Boolean(route.children?.length)
}

const hasPermissions = (route: SideMenu, permissions: string[]): boolean => {
  return permissions?.includes(route?.rule || '')
}
