import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useToken from '@/hooks/useToken'

const Page = () => {
  const [getToken] = useToken()
  const token = getToken()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) navigate('/login')
  }, [token])

  return (
    <div>
      <h1>halo , user!</h1>
    </div>
  )
}

export default Page
