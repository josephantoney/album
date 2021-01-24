module.exports = {
    ...require('../configs/eslint-common-config'),
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
    }
}
