export default function ({ $axios, redirect, route, store }) {
  $axios.defaults.baseURL = process.env.baseUrl
  // 超时设定
  $axios.defaults.timeout = 3000
  // request header
  $axios.setHeader(
    'Content-Type',
    'application/x-www-form-urlencoded; charset=UTF-8',
    ['post']
  )

  // 请求拦截
  $axios.onRequest((config) => {})
  // 响应拦截
  $axios.onResponse((res) => {})
  // erro
  $axios.onError((error) => {
    alert('请求失败', error)
  })
}
