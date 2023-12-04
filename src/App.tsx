import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import Header from '@/components/app-header'
import Footer from '@/components/app-footer'
// import { useSelector } from 'react-redux'
// import { useAppSelector, useAppDispatch } from '@/store'

function App() {
  return (
    <div className="App">
      <Header />

      {/* 懒加载需要用Suspense组件进行包裹 */}
      <Suspense fallback="loading.....">
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
