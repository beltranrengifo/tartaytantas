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
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'block-no-empty': null,
    'unit-allowed-list': ['em', 'rem', 's', 'px', '%', 'vh', 'vw', 'ms', 'deg'],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
