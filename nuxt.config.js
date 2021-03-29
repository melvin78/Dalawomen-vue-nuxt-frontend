import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode,
  server: {
    host: '0.0.0.0'
  },


  vue: {
    config: {
      productionTip: true,
      devtools: true,
    }
  },


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - dalawomen',
    title: 'dalawomen',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Crete+Round&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/axioshelper.js',
    '~plugins/apiservice.js',
    '~plugins/vee-validate.js',
    '~plugins/vuetify.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/laravel-echo',
  ],

  echo: {
    broadcaster: 'pusher',
    authModule: true,
    connectOnLogin: true,
    authEndpoint: 'http://localhost:8086/api/broadcasting/auth',
    key: process.env.PUSHER_APP_KEY,
    wsHost: process.env.VUE_APP_WEBSOCKET_SERVER,
    wsPort: 6001,
    sanctum: true,
    forceTLS: false,
    disableStats: true,
  },

  axios: {

    baseURL: process.env.VUE_APP_API_URL,
    credentials: true,
  },
  router: {
    middleware: ['auth']
  },

http:{
  baseURL: process.env.VUE_APP_API_URL,
},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],


  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#119DA4",
          accent: "3D87E4",
          secondary: "#171b34",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },

      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],

  },
  auth: {


    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8086',
      },
    },


  },
}
