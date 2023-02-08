import { encrypt, decrypt } from 'crypto-js/aes'
import UTF8 from 'crypto-js/enc-utf8'

import { TOKEN_SECRET_KEY } from './config'

export const encode = (data: object, secret: string = TOKEN_SECRET_KEY) =>
  encrypt(JSON.stringify(data), secret).toString()

// this func was written by myself
export const decode = (data: string, secret: string = TOKEN_SECRET_KEY) =>
  JSON.parse(decrypt(data, secret).toString(UTF8)) || null

// this func was implemented by chatgpt
// export const decode = (data: string, secret: string = TOKEN_SECRET_KEY) => {
//   const bytes = decrypt(data, secret)
//   const origin = bytes.toString(UTF8)
//   if (origin) {
//     return JSON.parse(origin)
//   }
//   return null
// }
