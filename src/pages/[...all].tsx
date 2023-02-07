import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, RootState } from '@/stores'

const NotFound = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const permissions = useSelector((state: RootState) => state.user.permissions)
}

export default NotFound
