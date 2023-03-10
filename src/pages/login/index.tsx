import type { FormProps } from 'antd/lib/form/Form'
import type { AppDispatch, RootState } from '@/stores'
import type { LoginProps, Permission } from './model'
import type { ThemeType } from '@/stores/common'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Input, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { setTheme } from '@/stores/common'
import { setPermissions } from '@/stores/user'
import { THEME_KEY } from '@/utils/config'
import useTitle from '@/hooks/useTitle'
import useToken from '@/hooks/useToken'
import { login } from '@/api/login'
import LogoSvg from '@/assets/images/logo.svg'
import { getPermittedMenu } from '@/menus/utils/helper'
import defaultMenus from '@/menus'
import { permissionsToArray } from '@/utils/permission'

const Login = () => {
  useTitle('登录')
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const [getToken, setToken] = useToken()
  const [loading, setLoading] = useState(false)
  const themeType = (localStorage.getItem(THEME_KEY) || 'light') as ThemeType
  const storePermissions = useSelector(
    (state: RootState) => state.user.permissions
  )

  useEffect(() => {
    if (themeType === 'dark') {
      document.body.className = 'theme-dark'
    }
    dispatch(setTheme(themeType === 'dark' ? 'dark' : 'light'))
  }, [themeType])

  useEffect(() => {
    if (getToken()) {
      const routes = getPermittedMenu(defaultMenus, storePermissions)
      navigate(routes)
    }
  }, [])

  const handleFinish: FormProps['onFinish'] = async (values: LoginProps) => {
    try {
      setLoading(true)
      const menus1 = [
        { id: 'dashboard', operation: [] },
        {
          id: 'demo',
          operation: [
            'copy',
            'editor',
            'wangEditor',
            'virtualScroll',
            'watermark'
          ]
        },
        {
          id: 'authority/user',
          operation: [
            'index',
            'create',
            'update',
            'view',
            'delete',
            'authority'
          ]
        },
        {
          id: 'authority/role',
          operation: ['index', 'create', 'update', 'view', 'delete']
        },
        {
          id: 'authority/menu',
          operation: ['index', 'create', 'update', 'view', 'delete']
        },
        {
          id: 'content/article',
          operation: ['index', 'create', 'update', 'view', 'delete']
        }
      ]
      const newPermission1s = permissionsToArray(menus1)

      const { data } = await login(values)
      const {
        data: { token }
      } = data

      const permissions: Permission[] = []

      if (!permissions?.length || !token)
        return message.error({
          content: '用户暂无权限登录',
          key: 'permissions'
        })

      const newPermissions = permissionsToArray(menus1)
      const menus = getPermittedMenu(defaultMenus, newPermissions)
      setToken(token)
      dispatch(setPermissions(newPermissions))
      message.success({ key: 'success', content: '登录成功', duration: 1 })
      navigate(menus)
    } finally {
      setLoading(false)
    }
  }

  const handleFinishFailed: FormProps['onFinishFailed'] = errors =>
    console.error('错误信息：', errors)

  return (
    <>
      <div
        className={`${
          themeType === 'dark' ? 'bg-black text-white' : 'bg-light-400'
        } w-screen h-screen flex flex-col items-center justify-center`}
      >
        <div
          className={`${
            themeType === 'dark' ? 'bg-black bg-dark-200' : 'bg-white'
          } w-300px h-290px p-30px rounded-6px box-border`}
        >
          <div className="pb-30px pt-10px flex items-center justify-center">
            <img
              className="mr-2 object-contain"
              width={30}
              height={30}
              src={LogoSvg}
              alt="logo"
            />
            <span className="text-xl font-bold tracking-2px">系统登录</span>
          </div>
          <Form
            name="horizontal_login"
            autoComplete="on"
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            initialValues={{
              mobile: '18111111111',
              password: '123456'
            }}
          >
            <Form.Item
              name="mobile"
              rules={[{ required: true, message: '请输入手机号码' }]}
            >
              <Input
                allowClear
                placeholder="手机号码"
                autoComplete="mobile"
                addonBefore={<UserOutlined className="change" />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password
                placeholder="密码"
                autoComplete="current-password"
                addonBefore={<LockOutlined className="change" />}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full mt-5px rounded-6px tracking-2px"
                loading={loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login
