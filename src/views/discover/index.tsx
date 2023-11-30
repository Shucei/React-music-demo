import React, { Suspense, memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface Props {
  children?: ReactNode
}

// 类型约束，FC是函数组件的意思
const Discover: FC<Props> = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/discover">推荐</Link>
        <Link to="/discover/toplist">排行榜</Link>
        <Link to="/discover/playlist">歌单</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      {/* 这里是路由的出口,用来显示子路由的,相当于vue中的router-view,,这里的路由出口是在discover中的div中,所以子路由会显示在discover中的div中 */}
      <Suspense fallback="loading.....">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Discover
