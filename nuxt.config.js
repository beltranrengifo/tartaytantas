import favicons from './config/favicons'

export default {
  target: 'static',

  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
  },

  head: {
    title: 'Tartaytantas | Obrador',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Obrador de tartas en Madrid, Aravaca',
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/favicon/ms-icon-144x144.png',
      },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      ...favicons,
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Duru+Sans&family=Playfair+Display:wght@400;500&display=swap',
      },
    ],
  },

  pageTransition: {
    name: 'page-transition',
  },

  css: [
    './assets/scss/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/_config.functions.scss',
      '@/assets/scss/_config.colors.scss',
      '@/assets/scss/_config.responsive.scss',
      '@/assets/scss/_config.components.scss',
      '@/assets/scss/_utils.animations-transitions.scss',
    ],
  },

  plugins: [
    '@/plugins/slick.js',
    '@/plugins/sanitize.client.js',
    '@/plugins/scroll.client.js',
    '@/plugins/state.js',
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],

  modules: ['v-sanitize/nuxt'],

  build: {
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
    extend(config) {
      config.module.rules.push({
        test: /\.txt$/i,
        loader: 'raw-loader',
      })
    },
  },
}
