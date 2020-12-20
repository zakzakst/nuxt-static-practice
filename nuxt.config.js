// 動的ルーティング用のデータ読み込み
const pageList = require('./static/data/route-params.json')

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.SITE_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.SITE_DESCRIPTION },
      { hid: 'keywords', name: 'keywords', content: process.env.SITE_KEYWORDS },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.SITE_NAME },
      { hid: 'og:type', property: 'og:type', content: process.env.SITE_OG_TYPE },
      { hid: 'og:url', property: 'og:url', content: process.env.SITE_DOMAIN + process.env.SITE_PATH },
      { hid: 'og:title', property: 'og:title', content: process.env.SITE_NAME },
      { hid: 'og:description', property: 'og:description', content: process.env.SITE_DESCRIPTION },
      { hid: 'og:image', property: 'og:image', content: process.env.SITE_DOMAIN + process.env.SITE_PATH + process.env.SITE_OG_IMAGE },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: process.env.SITE_PATH + process.env.SITE_FAVICON },
      { rel: 'apple-touch-icon', type: 'image/png', href: process.env.SITE_PATH + process.env.SITE_APPLE_ICON }
    ],
    script: [
      // { src: 'https://www.youtube.com/iframe_api' },
      // { src: 'https://www.youtube.com/s/player/2e6e57d8/www-widgetapi.vflset/www-widgetapi.js' },
    ],
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
    {src: '@/plugins/vue-good-table', mode: 'client'},
    {src: '@/plugins/vuejs-datepicker', mode: 'client'},
    {src: '@/plugins/vue-youtube'},
    // {src: '@/plugins/vue-full-calendar', mode: 'client'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    'cookie-universal-nuxt',
    'nuxt-svg-loader',
    '@nuxtjs/sitemap',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      'gsap',
      'vee-validate/dist/rules',
      'vuejs-datepicker',
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

  // loading: '@/components/loading.vue',

  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.SITE_DOMAIN,
    exclude: [
      '/hold/calendar'
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
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    // debug: {
    //   enabled: process.env.NODE_ENV === 'production',    // default value is false
    //   trace: process.env.NODE_ENV === 'production',      // default value is false
    //   sendHitTask: process.env.NODE_ENV === 'production' // default value is false
    // }
  },
}
