import { encrypt, decrypt } from 'crypto-js/aes'
import UTF8 from 'crypto-js/enc-utf8'

import { TOKEN_SECRET_KEY } from './config'

export const encode = (data: object, secret: string = TOKEN_SECRET_KEY) => {
  const code = JSON.stringify(data)
  return encrypt(code, secret).toString()
}

export const decode = (data: string, secret: string = TOKEN_SECRET_KEY) => {
  const bytes = decrypt(data, secret)
  const origin = bytes.toString(UTF8)
  if (origin) {
    return JSON.parse(origin)
  }
  return null
}
