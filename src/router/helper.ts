import type { RouteObject } from 'react-router-dom'

const layoutRoutes = (routes: RouteObject[]) => {
  const layouts: RouteObject[] = []

  for (let i = 0; i < routes.length; i++) {
    const { path } = routes[i]
    if (path !== 'login' && path !== 'dataScreen') {
      layouts.push(routes[i])
    }
  }
  return layouts
}

export default layoutRoutes
