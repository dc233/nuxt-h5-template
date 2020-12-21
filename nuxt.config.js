export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-h5-templatee',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // router 属性让你可以个性化配置 Nuxt.js 应用的路由
  router: {
    middleware: ['auth'],
  },
  // 全局 CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/style/common.less'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/axios'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/style-resources'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  // css 预处理器配置
  styleResources: {
    less: './assets/**/*.less',
  },
  // axios 配置跨域
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'https://www.fastmock.site/mock/53df7119c852e65d94f26a08478f75e4',
    },
  },
  // 环境变量
  env: {
    baseUrl: process.env.NODE_ENV === 'production' ? 'http' : '/api/',
  },
  // loading
  loading: false,
}
