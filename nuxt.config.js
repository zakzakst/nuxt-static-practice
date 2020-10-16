// 動的ルーティング用のデータ読み込み
const pageList = require('./static/data/route-params.json')

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
    {src: '@/plugins/vue-scrollto'},
    {src: '@/plugins/vue-slick-carousel'},
    {src: '@/plugins/vue-image-lightbox', mode: 'client'},
    {src: '@/plugins/vee-validate'},
    {src: '@/plugins/snapsvg-cjs', mode: 'client'},
    {src: '@/plugins/vuex-persistedstate', mode: 'client'},
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
    'nuxt-svg-loader',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      'gsap',
      'vee-validate/dist/rules',
    ],
    extractCSS: true,
  },

  // 動的ルーティングの追加
  generate: {
    routes() {
      return pageList.map(page => {
        return `/finish/route/${page}`
      })
    }
  },

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

  loading: '@/components/loading.vue',

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://example.com',
    exclude: [
      '/hold/vee-validate'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    routes() {
      return pageList.map(page => {
        return `/finish/route/${page}`
      })
    }
  }
}
