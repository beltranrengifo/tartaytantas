module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'tailwind',
          'function',
          'return',
          'else',
          'if',
          'mixin',
          'warn',
          'include',
          'extend',
        ],
      },
    ],
    'block-no-empty': null,
    'unit-allowed-list': ['em', 'rem', 's', 'px', '%', 'vh', 'vw', 'ms'],
  },
}
