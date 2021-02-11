module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'content/**/*.ts',
      'nuxt.config.ts',
      // .txt
      'content/**/*.txt',
    ],
  },
  theme: {
    fontFamily: {
      sans: ['Duru Sans', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'base-color': 'var(--color-base)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      'secondary-light': 'var(--color-secondary-light)',
      tertiary: 'var(--color-tertiary)',
      brand: 'var(--color-brand)',
      'brand-secondary': 'var(--color-brand-secondary)',
      dark: 'var(--color-dark)',
      white: 'var(--color-white)',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      'base-color': 'var(--color-base)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      'secondary-light': 'var(--color-secondary-light)',
      tertiary: 'var(--color-tertiary)',
      brand: 'var(--color-brand)',
      'brand-secondary': 'var(--color-brand-secondary)',
      dark: 'var(--color-dark)',
      white: 'var(--color-white)',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      'base-color': 'var(--color-base)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      'secondary-light': 'var(--color-secondary-light)',
      tertiary: 'var(--color-tertiary)',
      brand: 'var(--color-brand)',
      'brand-secondary': 'var(--color-brand-secondary)',
      dark: 'var(--color-dark)',
      white: 'var(--color-white)',
    }),
    extend: {
      minHeight: {
        '1/3-screen': '33vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',
        66: '16rem',
      },
      maxHeight: {
        '1/3-screen': '33vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',
        32: '8rem',
        66: '16rem',
        160: '40rem',
      },
      height: {
        '1/3-screen': '33vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',
        66: '16rem',
      },
      width: {
        'text-block-sm': '280px',
        'text-block-md': '380px',
        80: '20rem',
        72: '18rem',
      },
      borderWidth: {
        3: '3px',
      },
      screens: {
        '2xl': '1536px',
        'desktop-menu': '992px',
      },
      padding: {
        36: '9rem',
      },
      fontSize: {
        'big-title': '3.75rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
