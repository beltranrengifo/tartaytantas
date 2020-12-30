module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['Duru Sans', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      base: 'var(--color-base)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      'secondary-light': 'var(--color-secondary-light)',
      tertiary: 'var(--color-tertiary)',
      brand: 'var(--color-brand)',
      'brand-secondary': 'var(--color-brand-secondary)',
      dark: 'var(--color-dark)',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      base: 'var(--color-base)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      'secondary-light': 'var(--color-secondary-light)',
      tertiary: 'var(--color-tertiary)',
      brand: 'var(--color-brand)',
      'brand-secondary': 'var(--color-brand-secondary)',
      dark: 'var(--color-dark)',
    }),
    extend: {
      height: {
        '1/2-screen': '50vh',
        '1/3-screen': '33vh',
        '3/4-screen': '75vh',
      },
      width: {
        't-block-sm': '280px',
        't-block-md': '380px',
      },
    },
  },
  variants: {},
  plugins: [],
}
