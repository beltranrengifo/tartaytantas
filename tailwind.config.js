module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['Oswald', 'Arial', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      base: 'var(--color-base)',
      primary: 'var(--color-primary)',
      light: 'var(--color-light)',
      danger: 'var(--color-danger)',
      success: 'var(--color-success)',
      soft: 'var(--color-soft)',
      'soft-light': 'var(--color-soft-light)',
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
}
