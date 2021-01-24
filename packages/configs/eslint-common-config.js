//copied from https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  env: {
      node: true
  }
};