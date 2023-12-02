import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  } // 针对特定的hyRequest实例添加拦截器
})

export default hyRequest
