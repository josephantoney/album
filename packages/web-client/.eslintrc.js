module.exports = {
    ...require('../configs/eslint-common-react-config'),
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
    }
}