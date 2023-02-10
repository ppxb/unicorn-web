import type { AppDispatch, RootState } from '@/stores'
import type { SideMenu } from '@@/common'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'antd'
import { TITLE_SUFFIX } from '@/utils/config'
import styles from '../index.module.less'
import Logo from '@/assets/images/logo.svg'
import { filterMenus, getOpenMenuByRoute } from '@/menus/utils/helper'
import { setOpenKeys, setSelectedKeys } from '@/stores/menu'
import defaultMenus from '@/menus'

const LayoutMenu = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const dispatch: AppDispatch = useDispatch()
  const [menus, setMenus] = useState<SideMenu[]>([])

  const selectedKeys = useSelector(
    (state: RootState) => state.menu.selectedKeys
  )
  const openKeys = useSelector((state: RootState) => state.menu.openKeys)
  const isCollapsed = useSelector((state: RootState) => state.menu.isCollapsed)
  const isPhone = useSelector((state: RootState) => state.menu.isPhone)
  const permissions = useSelector((state: RootState) => state.user.permissions)

  useEffect(() => {
    const newOpenKey = getOpenMenuByRoute(pathname)
    if (!isPhone && !isCollapsed) {
      dispatch(setOpenKeys(newOpenKey))
      dispatch(setSelectedKeys(pathname))
    }
  }, [pathname])

  useEffect(() => {
    const filtedMenus = filterMenus(defaultMenus, permissions)
    setMenus(filtedMenus || [])
  }, [permissions])

  return (
    <>
      <div className={`transition-all overflow-auto z-2 ${styles.menu}`}>
        <div className="flex text-white content-center px-5 py-2 cursor-pointer">
          <img
            src={Logo}
            width={30}
            height={30}
            className="object-contain"
            alt="logo"
          />
          <span className="text-white ml-3 text-xl font-bold truncate">
            {TITLE_SUFFIX}
          </span>
        </div>

        <Menu
          className="z-999"
          selectedKeys={[selectedKeys]}
          openKeys={openKeys}
          mode="inline"
          theme="light"
          inlineCollapsed={false}
          items={menus}
          //   onClick={onClick}
          //   onOpenChange={onOpenChange}
        />
      </div>
    </>
  )
}

export default LayoutMenu
