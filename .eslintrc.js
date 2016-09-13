module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'airbnb',
  env: {
    'browser': true
  },
  rules: {
    'import/no-extraneous-dependencies': [2, { 'devDependencies': true }]
  }
};
