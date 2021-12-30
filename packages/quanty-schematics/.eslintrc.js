module.exports = {
  ...require('config/eslint-preset'),
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['src/templates/**/files/*.ts'],
}
