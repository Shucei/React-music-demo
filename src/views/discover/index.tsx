import React, { Suspense, memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar/index'
interface Props {
  children?: ReactNode
}

// 类型约束，FC是函数组件的意思
const Discover: FC<Props> = () => {
  return (
    <div>
      <NavBar />
      {/* 这里是路由的出口,用来显示子路由的,相当于vue中的router-view,,这里的路由出口是在discover中的div中,所以子路由会显示在discover中的div中 */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
