const config = require('@gitcoin/config/eslint-library');

module.exports = {
  root: true,
  extends: [config],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
