module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
  },
  rules: {
    'react/prefer-es6-class': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': 'off',
    'react/sort-comp': 'off',
    'react/no-string-refs': 'warning',
    'jsx-a11y/label-has-for': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
  },
}
