// 外部APIを利用してのページ書き出しに必要？
// const pageList = require('https://data.com//path/to/data.json')

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-static-practice',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/style.scss',
    // 'vue-slick-carousel/dist/vue-slick-carousel.css',
    // 'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    // 'vue-image-lightbox/dist/vue-image-lightbox.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/vue-scrollto'},
    {src: '~/plugins/vue-slick-carousel'},
    {src: '~/plugins/vue-image-lightbox', mode: 'client'},
    {src: '~/plugins/vee-validate'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ]
  },

  // 外部APIを利用してのページ書き出しに必要？
  // generate: {
  //   routes() {
  //     return pageList.map(page => {
  //       return `page`
  //     })
  //   }
  // },

  styleResources: {
    scss: [
      '@/assets/sass/base/_variables.scss'
    ]
  },

  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:wght@100;300;700;900']
    }
  },
}
