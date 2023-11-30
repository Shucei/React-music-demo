import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
// import Discover from '@/views/discover'
// import My from '@/views/mine'
// import Focus from '@/views/focus'
// import Download from '@/views/download'
// 懒加载
const Discover = lazy(() => import('@/views/discover'))
const My = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))
const Toplist = lazy(() => import('@/views/discover/c-views/toplist'))
const Playlist = lazy(() => import('@/views/discover/c-views/playlist'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Album = lazy(() => import('@/views/discover/c-views/album'))

const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" replace={true} />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/toplist',
        element: <Toplist />
      },
      {
        path: '/discover/playlist',
        element: <Playlist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/my',
    element: <My />
  },
  {
    path: 'friend',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default router
