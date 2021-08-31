// service统一出口
import LJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const ljRequest = new LJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('請求攔截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('請求失敗攔截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('相應攔截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败拦截')
      return err
    }
  }
})
export default ljRequest
