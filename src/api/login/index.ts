import type { LoginProps, LoginResult } from '@/pages/login/model'
import type { Result } from '@@/common'
import request from '@/utils/request'

export const login = (data: LoginProps) =>
  request.post<Result<LoginResult>>('/base/login', data)
