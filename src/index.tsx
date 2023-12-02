import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // HashRouter 是 react-router-dom 提供的路由组件
import { Provider } from 'react-redux' // react-redux 提供的 Provider 组件，可以让容器组件拿到 state
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import '@/assets/css/index.less'
import theme from './assets/theme'
import App from '@/App'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // 这里的 StrictMode 是 React 17 新增的特性，用于检查代码中的潜在问题。
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
