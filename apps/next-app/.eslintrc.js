const config = require('@gitcoin/config/eslint-next');

module.exports = {
  root: true,
  extends: [config],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
