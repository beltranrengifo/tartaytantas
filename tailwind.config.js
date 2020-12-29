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
      navigation: 'var(--color-navigation)',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      base: 'var(--color-base)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
      brand: 'var(--color-brand)',
      'brand-secondary': 'var(--color-brand-secondary)',
      navigation: 'var(--color-navigation)',
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
}
