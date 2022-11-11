// const react = require('eslint-plugin-react');
// const globals = require('globals');
module.exports = {
  // "files": ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  // "languageOptions": {
  //   "parserOptions": {
  //     "ecmaFeatures": {
  //       "jsx": true,
  //     },
  //   },
  //   "globals": {
  //     ...globals.browser,
  //   },
  // },
  // ... others are omitted for brevity
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  // "plugins": [
  //   react
  // ],
  "rules": {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": "warn",
    "react/prop-types": 0
  }
}
