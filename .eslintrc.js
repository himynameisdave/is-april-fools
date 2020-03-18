module.exports = {
  extends: [
    'himynameisdave/configurations/babel-node',
    'himynameisdave/configurations/typescript'
  ],
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/extensions': ['.ts'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true 
      },
    },
  },
  rules: {
    'import/extensions': 'off'
  }
}
