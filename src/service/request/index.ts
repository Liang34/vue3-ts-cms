import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface ljRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
interface ljRequestConfig extends AxiosRequestConfig {
  interceptors: ljRequestInterceptors
}
class ljRequest {
  instance: AxiosInstance
  interceptors: ljRequestInterceptors
  constructor(config: ljRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )

    // 所有实例都会添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('all')
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log('hello')
      console.log(res)
    })
  }
}
export default ljRequest
