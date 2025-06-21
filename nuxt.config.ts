import { defineNuxtConfig } from 'nuxt/config'
import { favicons } from './config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // SSG mode (same as target: 'static' in Nuxt 2)
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  // Runtime config (replaces env)
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      googleRoutesApiKey: process.env.GOOGLE_ROUTES_API_KEY,
    },
  },

  // App config (replaces head)
  app: {
    head: {
      title: 'Tartaytantas | Obrador',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
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
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-13Y327VN7S',
          async: true,
        },
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_ROUTES_API_KEY}&libraries=directions`,
          defer: true,
        },
      ],
    },
    pageTransition: {
      name: 'page-transition',
    },
  },

  // CSS
  css: [
    '~/assets/scss/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  // Plugins
  plugins: [
    '~/plugins/slick.js',
    '~/plugins/sanitize.client.js',
    '~/plugins/scroll.client.js',
    '~/plugins/cookie-law.client.js',
    '~/plugins/state.js',
    '~/plugins/gtag.client.js',
  ],

  // Auto-import components
  components: true,

  // Modules (buildModules merged into modules in Nuxt 3)
  modules: ['@nuxtjs/tailwindcss'],

  // TypeScript
  typescript: {
    strict: true,
  },

  // Vite config (replaces build.extend)
  vite: {
    resolve: {
      alias: {
        '@scss': '@/assets/scss',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_config.functions.scss";
            @import "@/assets/scss/_config.colors.scss";
            @import "@/assets/scss/_config.responsive.scss";
            @import "@/assets/scss/_config.components.scss";
          `,
        },
      },
    },
    assetsInclude: ['**/*.txt'],
  },

  // Dev tools
  devtools: { enabled: true },
})
