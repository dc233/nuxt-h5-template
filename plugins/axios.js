export default function ({ $axios, redirect, route, store }) {
  $axios.defaults.baseURL = process.env.baseUrl
  // 超时设定
  $axios.defaults.timeout = 3000

  // 请求拦截
  $axios.onRequest((config) => {
    console.log(config.headers)
  })
  // 响应拦截
  $axios.onResponse((res) => {})
  // erro
  $axios.onError((error) => {
    return Promise.reject(error)
  })
}
