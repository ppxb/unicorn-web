import { RouteObject, useRoutes } from 'react-router-dom'
import layoutRoutes from './helper'

const layouts = layoutRoutes(routes)
const newRoutes: RouteObject[] = []

const App = () => {
  return <>{useRoutes(newRoutes)}</>
}

export default App
