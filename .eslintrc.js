module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": ["error"],
  },
};
