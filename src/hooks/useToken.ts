import { TOKEN_NAME } from '@/utils/config'
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage
} from '@/utils/local'

const useToken = () => {
  const getToken = () => getLocalStorage<string>(TOKEN_NAME) || ''
  const setToken = (value: string) => setLocalStorage(TOKEN_NAME, value)
  const removeToken = () => removeLocalStorage(TOKEN_NAME)

  return [getToken, setToken, removeToken] as const
}

export default useToken
