export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
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
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Duru+Sans&family=Playfair+Display:wght@400;500&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
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

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/slick.js',
    '@/plugins/sanitize.client.js',
    '@/plugins/scroll.client.js',
    '@/plugins/state.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['v-sanitize/nuxt'],
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
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
  extends: ['@nuxtjs/eslint-config-typescript'],
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
}
