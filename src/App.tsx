import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from '@/router'
// import { useSelector } from 'react-redux'
import { useAppSelector, useAppDispatch } from '@/store'
import { increment } from './store/modules/counter'

function App() {
  const { count } = useAppSelector((state) => ({
    count: state.counter.count
  }))

  const dispatch = useAppDispatch()
  const handleChange = () => {
    dispatch(increment(12))
  }
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/my">我的音乐</Link>
        <Link to="/friend">关注</Link>
        <Link to="/download">下载</Link>
      </div>
      <h2>当前计数{count}</h2>
      <button onClick={handleChange}>修改count</button>
      {/* 懒加载需要用Suspense组件进行包裹 */}
      <Suspense fallback="loading.....">
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
