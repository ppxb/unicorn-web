import { DEFAULT_CACHE_TIME } from './config'
import { decode, encode } from './crypto'

interface StorageData {
  value: unknown
  expire: number | null
}

export const setLocalStorage = <T>(
  key: string,
  value: unknown,
  expire: number | null = DEFAULT_CACHE_TIME
) => {
  const time = expire !== null ? new Date().getTime() + expire * 1000 : null
  const data: StorageData = { value, expire: time }
  const json = encode(data)
  localStorage.setItem(key, json)
}

export const getLocalStorage = <T>(key: string) => {
  const json = localStorage.getItem(key)

  if (json) {
    let data: StorageData | null = null
    try {
      data = decode(json)
    } catch {
      console.log('decode data failed')
    }

    if (data) {
      const { value, expire } = data
      if (expire == null || expire >= Date.now()) {
        return value as T
      }
    }

    removeLocalStorage(key)
    return null
  }
  return null
}

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
  localStorage.clear()
}
