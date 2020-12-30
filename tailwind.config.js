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
      tertiary: 'var(--color-tertiary)',
      brand: 'var(--color-brand)',
      'brand-secondary': 'var(--color-brand-secondary)',
      dark: 'var(--color-dark)',
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
}
