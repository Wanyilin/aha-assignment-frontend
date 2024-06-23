module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: ['airbnb-typescript', 'eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  ignorePatterns: [
    'node_modules/',
    'build/',
    'dist/',
    'bundle.js',
    '.eslintrc.js',
    'tsconfig.json',
    'webpack.config.json',
    'custom.d.ts',
    'webpack.config.js',
  ],
  settings: {
    'import/resolver': {
      typescript: {}, // This will use the default settings for resolving TypeScript modules
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
