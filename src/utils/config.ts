// common
export const TITLE_SUFFIX = '通用后台管理系统'
export const THEME_KEY = 'light'

// token
export const TOKEN_NAME = '__unicorn__'
export const TOKEN_SECRET_KEY = '__UNICORN_NEXT__'
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 2

// password rule
export const PASSWORD_RULE = {
  pattern: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*+\.\_\-*]{6,12}$/,
  message: '密码长度为6-12位必须包含数字和字母'
}
