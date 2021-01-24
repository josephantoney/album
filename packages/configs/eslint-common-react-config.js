
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
    ],
    settings: {
        react: {
            "version": "detect"
        },
    },
    rules: {
        "react/jsx-fragments": "error"
    },
    env: {
        browser: true
    }
  };