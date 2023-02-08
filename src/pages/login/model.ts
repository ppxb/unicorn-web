export interface LoginProps {
  mobile: string
  password: string
}

export interface LoginResult {
  token: string
  expire: string
}
