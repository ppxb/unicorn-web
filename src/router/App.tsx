import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import layoutRoutes from './helper'
import Login from '@/pages/login'
import Layout from '@/layout'

const layouts = layoutRoutes(routes)
const newRoutes: RouteObject[] = [
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '',
    element: <Layout />,
    children: layouts
  }
]

const App = () => {
  return <>{useRoutes(newRoutes)}</>
}

export default App
