module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'eslint-plugin-react': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/jsx-no-bind': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
  },
};
