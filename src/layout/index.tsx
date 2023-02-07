import useToken from '@/hooks/useToken'
import { useEffect } from 'react'
import { useNavigate, useOutlet } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()
  const [getToken] = useToken()
  const token = getToken()
  const outlet = useOutlet()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  })

  return <div>{outlet}</div>
}

export default Layout
