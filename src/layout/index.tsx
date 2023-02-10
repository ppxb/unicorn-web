import type { AppDispatch, RootState } from '@/stores'
import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useToken from '@/hooks/useToken'
import Menu from './components/menu'

const Layout = () => {
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const [getToken] = useToken()
  const { pathname, search } = useLocation()
  const [loading, setLoading] = useState(false)
  const uri = pathname + search
  const token = getToken()
  const outlet = useOutlet()

  const permissions = useSelector((state: RootState) => state.user.permissions)
  const isRefresh = useSelector((state: RootState) => state.common.isRefresh)

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  })

  return (
    <div id="layout">
      <Menu />
      <div>{outlet}</div>
    </div>
  )
}

export default Layout
