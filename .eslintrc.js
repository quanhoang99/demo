module.exports = {
  env: { browser: true, es2021: true },
  settings: {
    'import/resolver': {
      node: { paths: ['.'], extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    }
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'func-names': 0,
    'no-use-before-define': 0,
    'no-plusplus': 0,
    'linebreak-style': 0,
    'max-len': 0,
    'import/no-cycle': 0
  }
};
