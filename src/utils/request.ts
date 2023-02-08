import useToken from '@/hooks/useToken'
import { message } from 'antd'
import axios from 'axios'

const prefixUrl = import.meta.env.VITE_BASE_URL as string

// prevent request repeat
const requestList: string[] = []
const source = axios.CancelToken.source()

const request = axios.create({
  baseURL: process.env.NODE_ENV !== 'development' ? prefixUrl : '/api',
  timeout: 180 * 1000
})

const handleError = (error: string, content?: string) => {
  console.error('错误信息：', error)
  message.error({
    content: content || error || '服务器内部错误',
    key: 'error'
  })
}

request.interceptors.request.use(
  config => {
    const [getToken] = useToken()
    const token = getToken() || ''
    if (config?.headers && token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // if this request has been submited then cancel the request
    // otherwise add this request to request list
    const requestFlag = `${JSON.stringify(config.url)}${JSON.stringify(
      config.data
    )}&${config.method}`
    if (requestList.includes(requestFlag)) source.cancel()
    else requestList.push(requestFlag)
    return config
  },
  err => {
    handleError(err, '服务器内部错误')
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    const requestFlag = `${JSON.stringify(response.config.url)}${JSON.stringify(
      response.config.data
    )}&${response.config.method}`
    const index = requestList.findIndex(item => item === requestFlag)
    requestList.slice(index, 1)

    // more server error code
    switch (res?.code) {
      case 400001:
        handleError(res?.msg, '权限不足，请重新登录')
        return Promise.reject(response)
    }

    return Promise.resolve(response)
  },
  err => {
    requestList.length = 0
    handleError(err, '服务器内部错误')
    return Promise.reject(err)
  }
)

export default request
