import axios, { AxiosResponse } from 'axios'

// new Promise<string>((resolve) => {
//   resolve('13')
// }).then((res) => {
//   console.log(res.length)
// })
axios.defaults.baseURL = 'https://httpbin.org'
// axios.defaults.timeout = 10000
// axios.defaults.headers = []
axios
  .get('/get', {
    params: {
      name: 'coderwhy',
      age: 18
    },
    timeout: 1000
  })
  .then((res: AxiosResponse) => {
    console.log(res.data)
  })
// axios.all--->promise.all
// axios
//   .all([
//     axios.get('/get', { params: { age: 19 } }),
//     axios.get('/post', { data: { age: 19 } })
//   ])
//   .then((res) => {
//     console.log(res)
//     console.log(res[0])
//     console.log(res[1])
//   })
/**
 * fn1:success
 * fn2:fail
 */
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return err
  }
)
// axios.interceptors.response.use(fn1, fn2)
export default axios
