export interface LoginProps {
  mobile: string
  password: string
}

export interface LoginResult {
  token: string
  expire: string
}

export interface Permission {
  id: string
  operation: string[]
}
