const pkg = require('./package')
const isProdMode = Object.is(process.env.NODE_ENV, 'production')

const server_url = `${pkg.hrssc_env.PORTAL_ORIGIN}/hrssc-platform-portal/`;

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: '9kg',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    // }, { 
    //   // 实时编译第三方样式太浪费项目启动时间，使用最终生成版，如果需要改动，改动第三方文件后 启动 npm run create_static
    //     rel: 'stylesheet',
    //     href: '/style/vendor.css' 
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },
  router: {
    // 每个路由都会拦截的模块
    // middleware: 'auth'
  },
  /*
   ** Global CSS
   */
  css: [
    // lib css
    'codemirror/lib/codemirror.css',
    // merge css
    'codemirror/addon/merge/merge.css',
    // theme css
    'codemirror/theme/base16-dark.css',
    // rich-editor
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css',
    // 实时编译第三方样式太浪费项目启动时间，使用最终生成版，如果需要改动，改动第三方文件后 启动 npm run create_static
    '~/assets/scss/vendor/vendor.scss',
    '~/assets/scss/base.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {src: '~/plugins/polyfill',ssr: false},
    {src: '~/plugins/cookies',ssr: false},
    '~/plugins/i18n',
    '~/plugins/element-ui',
    '~/plugins/axios',
    '~/plugins/lodash',
    {src: '~/plugins/storage',ssr: false},
    {src: '~/plugins/echarts', ssr: false},
    {src: '~/plugins/context-menu', ssr: false},
    { src: '~plugins/rich-editor', ssr: false },
    { src: '~plugins/code-editor', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // 全局 scss 变量引入
    [
      "nuxt-sass-resources-loader",
      {
        resources: "~/assets/scss/var/common.scss"
      }
    ],
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: server_url,
    browserBaseURL: server_url
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: ["vuedraggable"],
    // 只抽离非页面内的样式到一个文件
    extractCSS: true,
    // extract each page style file into an independent file
    // extractCSS: {
    //   allChunks: true
    // },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.loaders.i18n = '@kazupon/vue-i18n-loader'
      // vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader'
    }
  },
  env: {
    server_url: server_url,
    HOST: pkg.hrssc_env.HOST,
    PORT: pkg.hrssc_env.PORT,
  }
}
