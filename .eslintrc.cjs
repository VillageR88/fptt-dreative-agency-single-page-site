/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'tailwindcss'],
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
    'no-multi-spaces': 'error',
  },
};
