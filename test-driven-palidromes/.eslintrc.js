module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    qoutes:['error','single', { avoidEscape: true}],
    'comma-dangle':['error', 'always-multiline'],
  },
  env: {
    node: true,
  },
};